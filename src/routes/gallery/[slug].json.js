import { api } from "./_api";

export const get = async (request) => {
  try {
    const response = await api(
      request,
      `wp/v2/collection/?slug=${request.params.slug}`
    );
    if (response.status === 404) {
      console.log("404 pano");
      // the user has visited before, but hasn't yet
      // created a todo list. start with an empty array
      return { body: [] };
    }

    return response;
  } catch (error) {
    console.error(error);
  }
};
