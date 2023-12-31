import { client } from "@/sanity/lib/client";
import {
  apiVersion,
  dataset,
  projectId,
  useCdn,
  apiToken,
} from "../../../sanity/env";

export async function POST(request) {
  const { name, text, _id } = await request.json();

  try {
    console.log("start");
    await client
      .config({
        token: apiToken,
      })
      .create({
        _type: "comment",
        name,
        text,
        post: {
          _type: "reference",
          _ref: _id,
        },
      });
    console.log("finish");

    return new Response(JSON.stringify({ message: "OK" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
}
