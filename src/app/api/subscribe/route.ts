import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Simple file-based subscriber storage for MVP
// Replace with Supabase/Buttondown/Mailchimp in production
const SUBSCRIBERS_FILE = path.join(process.cwd(), "data", "subscribers.json");

async function getSubscribers(): Promise<Array<{ email: string; date: string; source: string }>> {
  try {
    const data = await fs.readFile(SUBSCRIBERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveSubscribers(subs: Array<{ email: string; date: string; source: string }>) {
  await fs.mkdir(path.dirname(SUBSCRIBERS_FILE), { recursive: true });
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subs, null, 2));
}

export async function POST(req: NextRequest) {
  try {
    const { email, source = "website" } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const subscribers = await getSubscribers();

    // Check for duplicates
    if (subscribers.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json({ message: "You're already subscribed!", alreadySubscribed: true });
    }

    subscribers.push({
      email: email.toLowerCase().trim(),
      date: new Date().toISOString(),
      source,
    });

    await saveSubscribers(subscribers);

    return NextResponse.json({
      message: "Welcome to Global Innovation Magazine!",
      count: subscribers.length,
    });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET() {
  const subscribers = await getSubscribers();
  return NextResponse.json({ count: subscribers.length });
}
