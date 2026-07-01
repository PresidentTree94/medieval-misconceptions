import { client } from "@/sanity/lib/client"
import { getAllCategories } from "@/sanity/lib/queries";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.HEALTH_CHECK_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let sanityHealthy = false;

  try {
    await client.fetch(getAllCategories);
    sanityHealthy = true;
  } catch (error) {
    console.error("Sanity health check failed: ", error);
    sanityHealthy = false;
  }

  return NextResponse.json({ sanityHealthy, timestamp: Date.now() }, { status: sanityHealthy ? 200 : 503 });
}