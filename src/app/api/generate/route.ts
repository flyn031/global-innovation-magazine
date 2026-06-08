import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { QUESTIONS } from "@/lib/questions";

export async function POST(req: NextRequest) {
  const { name, role, company, category, photo, answers, email, tier = "free" } = await req.json();

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "ANTHROPIC_API_KEY not set" }, { status: 500 });
  }

  const prompt = `You are the editorial engine for Global Innovation Magazine (est. 2013, UK). You produce "10 Things I Know" interviews — a series of standalone insights from one person, each a polished self-contained statement.

INTERVIEWEE: ${name}
ROLE: ${role}
COMPANY: ${company}
CATEGORY: ${category}

RAW INTERVIEW RESPONSES:
${QUESTIONS.map((q: string, i: number) => `Q${i + 1}: ${q}\nA${i + 1}: ${answers[i]}`).join("\n\n")}

Generate a JSON response with these exact fields:
{
  "intro": "2-3 sentence editorial introduction in warm third person.",
  "insights": ["8-10 standalone insights. Each is a polished first-person statement (40-80 words). Written as distilled wisdom, NOT Q&A."],
  "descriptor": "Short lowercase descriptor like 'co-founder of Luminary AI'",
  "subheadline": "Starts with 'On'. Lists 3-4 themes.",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "seo_description": "155-char SEO meta description",
  "pull_quote": "The single most powerful sentence from the insights"
}

Respond ONLY with valid JSON. No markdown, no backticks, no preamble.`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2048,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    const text = data.content?.map((i: { text?: string }) => i.text || "").join("") || "";
    const clean = text.replace(/```json|```/g, "").trim();
    const result = JSON.parse(clean);

    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

    // Save submission to database for admin review
    const { error: subError } = await supabase.from("submissions").insert({
      name, email, role, company, category, photo: photo || null,
      answers, status: tier === "free" ? "pending" : "approved",
      tier,
    });

    if (subError) console.error("Submission save error:", subError);

    // If paid tier, auto-publish; free tier goes to pending review
    if (tier !== "free") {
      const { error: pubError } = await supabase.from("interviews").insert({
        id: slug, name, role, company, category,
        date, read_time: `${Math.max(4, Math.ceil((result.insights?.join(" ") || "").split(" ").length / 200))} min read`,
        photo: photo || null,
        subheadline: result.subheadline,
        descriptor: result.descriptor,
        intro: result.intro,
        insights: result.insights,
        pull_quote: result.pull_quote,
        tags: result.tags,
        seo_description: result.seo_description,
        archive: false,
        published: true,
      });

      if (pubError) console.error("Interview publish error:", pubError);
    }

    return NextResponse.json({
      ...result,
      id: slug, name, role, company, category,
      photo: photo || null, date,
      read_time: `${Math.max(4, Math.ceil((result.insights?.join(" ") || "").split(" ").length / 200))} min read`,
      status: tier === "free" ? "pending_review" : "published",
    });
  } catch (err) {
    console.error("Generation error:", err);
    return NextResponse.json({ error: "Failed to generate article" }, { status: 500 });
  }
}
