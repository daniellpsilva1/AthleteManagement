import TennisIcon from "@/components/tennis-icon"
import { supabase, type Player } from "@/lib/supabase"
import Link from "next/link"
import { Plus } from "lucide-react"

async function getPlayers(): Promise<Player[]> {
  const { data, error } = await supabase.from("players").select("*").order("first_name", { ascending: true })

  if (error) {
    console.error("Error fetching players:", error)
    return []
  }

  return data || []
}

export default async function PlayersPage() {
  const players = await getPlayers()

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <TennisIcon className="w-12 h-12 mr-4" />
          <h1 className="text-4xl font-bold">Player Management</h1>
        </div>
        <Link href="/players/add" className="btn-primary flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add New Player
        </Link>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Player List</h2>
        <div className="mb-4">
          <input type="text" placeholder="Search Players" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    First Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Age Group
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {players.length > 0 ? (
                  players.map((player) => (
                    <tr key={player.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{player.first_name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{player.last_name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{player.email || "..."}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{player.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{player.level}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{player.age_group}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                      No players found. Add your first player to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-start">
        <Link href="/players/details" className="btn-secondary">
          View/Edit Player Details
        </Link>
      </div>
    </div>
  )
}

