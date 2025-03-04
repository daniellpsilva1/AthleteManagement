"use client"

import type React from "react"

import { useState } from "react"
import TennisIcon from "@/components/tennis-icon"

export default function TournamentResultsPage() {
  const [url, setUrl] = useState("")
  const [results, setResults] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch("/api/scrape-tournament", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })
      const data = await response.json()
      setResults(data.results)
    } catch (error) {
      console.error("Error scraping tournament results:", error)
      setResults("Error scraping tournament results. Please try again.")
    }
    setIsLoading(false)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center mb-8">
        <TennisIcon className="w-12 h-12 mr-4" />
        <h1 className="text-3xl font-bold">Tournament Results Scraper</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
              Tournament Results URL
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="https://example.com/tournament-results"
              required
            />
          </div>
          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? "Scraping..." : "Scrape Results"}
          </button>
        </form>

        {results && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Scraped Results:</h2>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">{results}</pre>
          </div>
        )}
      </div>
    </div>
  )
}

