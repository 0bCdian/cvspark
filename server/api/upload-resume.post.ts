import * as PDF from "pdf-parse/lib/pdf-parse.js";
import { analizeCV } from "../utils/analize";
export default defineEventHandler(async (event) => {
  try {
    const body = await readMultipartFormData(event);
    if (body === undefined) throw new Error("body undefined");
    const cvData = await PDF.default(body[0]?.data);
    if (cvData.text === undefined) throw new Error("Empty pdf");
    //const chatResponse = await analizeCV(cvData.text);
    console.log(cvData);
    return cvData;
  } catch (error) {
    event.node.res.statusCode = 500;
    console.error(error);
    return {
      message: "internal server error",
    };
  }
});
