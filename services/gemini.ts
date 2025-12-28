import { GoogleGenAI, Type } from "@google/genai";

// Fixed: Directly use process.env.API_KEY for initialization as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBusinessAudit = async (businessInfo: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Perform a professional business audit for an SME. Analyze their situation and provide actionable insights regarding data analytics and workflow automation.
      Business Information: ${businessInfo}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER, description: "Efficiency score from 0-100" },
            painPoints: { type: Type.ARRAY, items: { type: Type.STRING } },
            recommendations: { type: Type.ARRAY, items: { type: Type.STRING } },
            potentialROI: { type: Type.STRING, description: "Estimated ROI description" }
          },
          required: ["score", "painPoints", "recommendations", "potentialROI"]
        }
      }
    });

    // Fixed: Access response.text property directly (not as a method)
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Audit Error:", error);
    throw error;
  }
};