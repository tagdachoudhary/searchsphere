const API_URL =
  `${import.meta.env.VITE_API_URL}/api/ai/summary`;

export const searchWeb = async (query) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });

    const text = await response.text();

    console.log(
      "SEARCH STATUS:",
      response.status
    );

    console.log(
      "SEARCH RESPONSE:",
      text
    );

    if (!response.ok) {
      throw new Error(
        `Search failed (${response.status}): ${text}`
      );
    }

    const data = JSON.parse(text);

    window.dispatchEvent(
      new Event("searchsphere-history-updated")
    );

    return data;
  } catch (error) {
    console.error(
      "SEARCH ERROR:",
      error
    );

    throw error;
  }
};