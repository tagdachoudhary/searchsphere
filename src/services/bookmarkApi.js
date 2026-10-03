const API_URL =
  `${import.meta.env.VITE_API_URL}/api/bookmarks`;

export const getBookmarks = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      credentials: "include",
    });

    const text = await response.text();

    console.log(
      "BOOKMARKS STATUS:",
      response.status
    );

    console.log(
      "BOOKMARKS RESPONSE:",
      text
    );

    if (!response.ok) {
      throw new Error(
        `Bookmark fetch failed (${response.status}): ${text}`
      );
    }

    return JSON.parse(text);
  } catch (error) {
    console.error(
      "BOOKMARK FETCH ERROR:",
      error
    );

    throw error;
  }
};


export const addBookmark = async ({
  title,
  link,
  snippet,
}) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        link,
        snippet,
      }),
    });

    const text = await response.text();

    console.log(
      "ADD BOOKMARK STATUS:",
      response.status
    );

    console.log(
      "ADD BOOKMARK RESPONSE:",
      text
    );

    if (!response.ok) {
      throw new Error(
        `Bookmark failed (${response.status}): ${text}`
      );
    }

    return JSON.parse(text);
  } catch (error) {
    console.error(
      "ADD BOOKMARK ERROR:",
      error
    );

    throw error;
  }
};


export const deleteBookmark = async (
  bookmarkId
) => {
  try {
    const response = await fetch(
      `${API_URL}/${bookmarkId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    const text = await response.text();

    console.log(
      "DELETE BOOKMARK STATUS:",
      response.status
    );

    console.log(
      "DELETE BOOKMARK RESPONSE:",
      text
    );

    if (!response.ok) {
      throw new Error(
        `Bookmark delete failed (${response.status}): ${text}`
      );
    }

    return JSON.parse(text);
  } catch (error) {
    console.error(
      "DELETE BOOKMARK ERROR:",
      error
    );

    throw error;
  }
};