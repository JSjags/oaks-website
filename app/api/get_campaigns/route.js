import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextResponse } from "next/server";

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: "us21",
});

export async function GET(request) {
  // console.log(request);
  const searchParams = request.nextUrl.searchParams;
  const offset = searchParams.get("offset");
  const count = searchParams.get("count");

  try {
    let response = await mailchimp.campaigns.list({
      count: count,
      offset: offset,
      status: "sent",
      sort_field: "send_time",
      sort_dir: "DESC",
    });

    return NextResponse.json({
      data: response.campaigns,
      count: response.total_items,
    });
  } catch (err) {
    return NextResponse.json({ data: "error occurred", error: err.message });
  }
}
