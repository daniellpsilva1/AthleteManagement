import { createClient } from "@supabase/supabase-js"
import { getEnv, validateEnv } from "./env"

// Validate environment variables before creating the client
validateEnv()

const supabaseUrl = getEnv("NEXT_PUBLIC_SUPABASE_URL")
const supabaseAnonKey = getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY")

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Player = {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  level: string
  age_group: string
  created_at?: string
}

export type Tournament = {
  id: number
  name: string
  start_date: string
  end_date: string
  location: string
  description?: string
  created_at?: string
}

export type TrainingSession = {
  id: number
  date: string
  time: string
  level: string
  description?: string
  created_at?: string
}

export type User = {
  id: string
  email: string
}

