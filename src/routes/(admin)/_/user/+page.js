export const load = ({ url }) => {
  let params = Object.fromEntries(url.searchParams);
  return {
    ...params,
  };
};
