import { error, json } from "@sveltejs/kit";

export const GET = async ({ url, params, locals }) => {
  const { option } = Object.fromEntries(url.searchParams);
  try {
    const data = await locals.db
      .collection(params.collection)
      .read(JSON.parse(option));

    return json(data);
  } catch (error) {
    throw error(400, error.body);
  }
};
