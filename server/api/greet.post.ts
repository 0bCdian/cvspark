export default defineEventHandler(async (e) => {
  const request = await readBody(e);
  console.log(request);
  return request;
});
