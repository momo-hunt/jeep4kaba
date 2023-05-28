import { json } from "@sveltejs/kit";

export const GET = async ({ url, params, locals }) => {
  const { option } = Object.fromEntries(url.searchParams);
  const data = await locals.db
    .collection(params.collection)
    .read(JSON.parse(option));

  return json(data);
};
