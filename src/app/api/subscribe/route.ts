import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email, source = "website" } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const { error } = await supabase
      .from("subscribers")
      .insert({ email: email.toLowerCase().trim(), source });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ message: "You're already subscribed!", alreadySubscribed: true });
      }
      throw error;
    }

    return NextResponse.json({ message: "Welcome to Global Innovation Magazine!" });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET() {
  const { count } = await supabase
    .from("subscribers")
    .select("*", { count: "exact", head: true });
  return NextResponse.json({ count: count || 0 });
}
