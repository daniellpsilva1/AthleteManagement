"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { TurtleIcon as TennisBall, Users, Calendar, Activity, MessageSquare, Trophy, LogOut } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "nav-link-active" : "nav-link"
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <div className="mb-8">
        <Link href="/" className="text-xl font-bold">
          Tennis Management
        </Link>
      </div>
      <nav className="space-y-2">
        <Link href="/" className={isActive("/")}>
          <div className="flex items-center gap-2">
            <TennisBall className="w-5 h-5" />
            <span>Home</span>
          </div>
        </Link>
        <Link href="/players" className={isActive("/players")}>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>Players</span>
          </div>
        </Link>
        <Link href="/tournament" className={isActive("/tournament")}>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>Tournament</span>
          </div>
        </Link>
        <Link href="/training" className={isActive("/training")}>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            <span>Training</span>
          </div>
        </Link>
        <Link href="/chat" className={isActive("/chat")}>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            <span>Chat</span>
          </div>
        </Link>
        <Link href="/tournament-results" className={isActive("/tournament-results")}>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            <span>Tournament Results</span>
          </div>
        </Link>
        <button onClick={handleSignOut} className="nav-link w-full text-left">
          <div className="flex items-center gap-2">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </div>
        </button>
      </nav>
    </aside>
  )
}

