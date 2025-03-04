import { NextResponse } from "next/server"
import * as cheerio from "cheerio"

export async function POST(req: Request) {
  const { url } = await req.json()

  try {
    const response = await fetch(url)
    const html = await response.text()
    const $ = cheerio.load(html)

    // This is a basic example. You'll need to adjust the selectors based on the specific website structure
    const results = $("table.tournament-results").text()

    return NextResponse.json({ results })
  } catch (error) {
    console.error("Error scraping tournament results:", error)
    return NextResponse.json({ error: "Failed to scrape tournament results" }, { status: 500 })
  }
}

