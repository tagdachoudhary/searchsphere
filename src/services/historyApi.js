const API_URL =
  `${import.meta.env.VITE_API_URL}/api/history`;

export const getSearchHistory = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      credentials: "include",
    });

    const text = await response.text();

    console.log(
      "HISTORY STATUS:",
      response.status
    );

    console.log(
      "HISTORY RESPONSE:",
      text
    );

    if (!response.ok) {
      throw new Error(
        `History fetch failed (${response.status}): ${text}`
      );
    }

    return JSON.parse(text);
  } catch (error) {
    console.error(
      "HISTORY ERROR:",
      error
    );

    throw error;
  }
};