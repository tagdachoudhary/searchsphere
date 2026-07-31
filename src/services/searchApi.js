const API_URL = "https://searchsphere-backend-16ps.onrender.com/api/ai/summary";

export const searchWeb = async (query) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  if (!response.ok) {
    throw new Error("Search failed");
  }

  return response.json();
};