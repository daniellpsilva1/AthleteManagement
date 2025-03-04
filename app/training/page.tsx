"use client"

import { useState } from "react"
import TennisIcon from "@/components/tennis-icon"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function TrainingPage() {
  const [activeTab, setActiveTab] = useState("group-schedule")

  const tabs = [
    { id: "group-schedule", label: "Group Training Schedule" },
    { id: "individual-plans", label: "Individual Training Plans" },
    { id: "group-reports", label: "Group Training Reports" },
    { id: "individual-reports", label: "Individual Training Reports" },
  ]

  const mockSessions = [
    { id: 1, date: "2025-02-26", time: "19:00:00", level: "Intermediate" },
    { id: 2, date: "2025-02-12", time: "19:00:00", level: "Intermediate" },
    { id: 3, date: "2025-02-19", time: "19:00:00", level: "Intermediate" },
    { id: 4, date: "2025-02-13", time: "15:00:00", level: "Intermediate" },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center mb-8">
        <TennisIcon className="w-12 h-12 mr-4" />
        <h1 className="text-4xl font-bold">Training Dynamics</h1>
      </div>

      <div className="mb-8">
        <div className="border-b">
          <nav className="flex -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {activeTab === "group-schedule" && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Group Training Schedule</h2>
            <Link href="/training/add-session" className="btn-primary flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Add New Group Training Session
            </Link>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Upcoming Group Sessions</h3>

            <div className="space-y-4">
              {mockSessions.map((session) => (
                <div
                  key={session.id}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center"
                >
                  <div className="font-medium">
                    {session.date} - {session.time} ({session.level})
                  </div>
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "individual-plans" && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Individual Training Plans</h2>
            <Link href="/training/add-plan" className="btn-primary flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Create New Training Plan
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-500">
              No individual training plans created yet. Click the button above to create your first plan.
            </p>
          </div>
        </div>
      )}

      {activeTab === "group-reports" && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Group Training Reports</h2>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-500">
              No group training reports available yet. Reports will be generated automatically as training sessions are
              completed.
            </p>
          </div>
        </div>
      )}

      {activeTab === "individual-reports" && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Individual Training Reports</h2>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-500">
              No individual training reports available yet. Reports will be generated as players complete their training
              plans.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

