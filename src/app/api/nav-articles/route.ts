import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
  const articles = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0..3] {
      _id, type, title, slug, publishedAt,
      mainImage { asset->{ url } }
    }`
  );
  return NextResponse.json(articles);
}
