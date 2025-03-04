import Link from "next/link"
import TennisIcon from "@/components/tennis-icon"
import { Users, Activity, Trophy } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center mb-8">
        <TennisIcon className="w-12 h-12 mr-4" />
        <h1 className="text-4xl font-bold">Welcome to Tennis Player Management</h1>
      </div>

      <div className="mb-12">
        <p className="text-xl text-gray-700">
          Your all-in-one solution for managing tennis players, training, and tournaments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card">
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">Player Management</h2>
          </div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Maintain detailed player profiles</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Track player progress and development</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Manage contact information</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Monitor skill levels and achievements</span>
            </li>
          </ul>
          <Link href="/players" className="btn-primary inline-block">
            Go to Player Management
          </Link>
        </div>

        <div className="card">
          <div className="flex items-center mb-4">
            <Activity className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">Training Dynamics</h2>
          </div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Schedule group training sessions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Create individual training plans</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Track performance and attendance</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Set and monitor training goals</span>
            </li>
          </ul>
          <Link href="/training" className="btn-primary inline-block">
            Go to Training Dynamics
          </Link>
        </div>

        <div className="card">
          <div className="flex items-center mb-4">
            <Trophy className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">Tournament Calendar</h2>
          </div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Organize and manage tournaments</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Handle player registrations</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>View tournament schedules</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Track tournament results</span>
            </li>
          </ul>
          <Link href="/tournament" className="btn-primary inline-block">
            Go to Tournament Calendar
          </Link>
        </div>
      </div>

      <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
        <p className="text-gray-700">
          Click on any of the sections above to begin managing your tennis program. Each section provides comprehensive
          tools to help you organize and optimize your tennis operations.
        </p>
      </div>
    </div>
  )
}

