import DB from "$lib/server/db";

export const handle = async ({ event, resolve }) => {
  let token = "abc";

  event.locals.db = new DB(token);

  const response = await resolve(event);
  return response;
};
