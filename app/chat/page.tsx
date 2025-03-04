"use client"
import { useChat } from "ai/react"
import TennisIcon from "@/components/tennis-icon"

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center mb-8">
        <TennisIcon className="w-12 h-12 mr-4" />
        <h1 className="text-3xl font-bold">Tennis Data Chat</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-4 mb-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`p-3 rounded-lg ${m.role === "user" ? "bg-blue-100" : "bg-gray-100"}`}>{m.content}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            className="flex-grow p-2 border border-gray-300 rounded-md"
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about your tennis data..."
          />
          <button type="submit" className="btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

