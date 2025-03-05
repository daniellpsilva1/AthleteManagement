"use client"

import { useEffect } from "react"
import { supabase } from "@/lib/supabase"

export default function SetupSupabase() {
  useEffect(() => {
    const setupDatabase = async () => {
      try {
        // Check if players table exists
        const { data: playersTables, error: playersError } = await supabase
          .from("players")
          .select("*")
          .limit(1)

        // If players table doesn't exist or there was an error, create it
        if (!playersTables || playersError || playersTables.length === 0) {
          try {
            await supabase.rpc("create_players_table")
            
            // Insert sample data
            await supabase
              .from("players")
              .insert([
                {
                  first_name: "Inês",
                  last_name: "Magalhães",
                  phone: "+351938791818",
                  level: "Intermediate",
                  age_group: "U14",
                },
                { first_name: "João", last_name: "Pinto", phone: "+351911766601", level: "Intermediate", age_group: "U14" },
                { first_name: "José", last_name: "Diogo", phone: "+351930946017", level: "Intermediate", age_group: "U12" },
                {
                  first_name: "Miguel",
                  last_name: "Durão",
                  phone: "+351934894003",
                  level: "Intermediate",
                  age_group: "U12",
                },
              ])
          } catch (error) {
            console.error("Error setting up players table:", error)
          }
        }

        // Check if tournaments table exists
        const { data: tournamentsTables, error: tournamentsError } = await supabase
          .from("tournaments")
          .select("*")
          .limit(1)

        // If tournaments table doesn't exist or there was an error, create it
        if (!tournamentsTables || tournamentsError || tournamentsTables.length === 0) {
          try {
            await supabase.rpc("create_tournaments_table")
            
            // Insert sample data
            await supabase
              .from("tournaments")
              .insert([
                {
                  name: "Carcavelos Open",
                  start_date: "2025-02-28",
                  end_date: "2025-03-02",
                  location: "Carcavelos Tennis Club",
                },
              ])
          } catch (error) {
            console.error("Error setting up tournaments table:", error)
          }
        }

        // Check if training_sessions table exists
        const { data: trainingSessionsTables, error: trainingsError } = await supabase
          .from("training_sessions")
          .select("*")
          .limit(1)

        // If training_sessions table doesn't exist or there was an error, create it
        if (!trainingSessionsTables || trainingsError || trainingSessionsTables.length === 0) {
          try {
            await supabase.rpc("create_training_sessions_table")
            
            // Insert sample data
            await supabase
              .from("training_sessions")
              .insert([
                { date: "2025-02-26", time: "19:00:00", level: "Intermediate" },
                { date: "2025-02-12", time: "19:00:00", level: "Intermediate" },
                { date: "2025-02-19", time: "19:00:00", level: "Intermediate" },
                { date: "2025-02-13", time: "15:00:00", level: "Intermediate" },
              ])
          } catch (error) {
            console.error("Error setting up training sessions table:", error)
          }
        }
      } catch (error) {
        console.error("Error in database setup:", error)
      }
    }

    setupDatabase()
  }, [])

  return null
}

