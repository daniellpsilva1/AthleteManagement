"use client"

import { useState } from "react"
import TennisIcon from "@/components/tennis-icon"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import Link from "next/link"

export default function TournamentPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const daysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const prevMonth = () => {
    setCurrentMonth((prev) => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() - 1)
      return newDate
    })
  }

  const nextMonth = () => {
    setCurrentMonth((prev) => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + 1)
      return newDate
    })
  }

  const goToToday = () => {
    setCurrentMonth(new Date())
  }

  const renderCalendar = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const totalDays = daysInMonth(year, month)
    const firstDay = firstDayOfMonth(year, month)

    const days = []

    // Add previous month's days
    const prevMonthDays = daysInMonth(year, month - 1)
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <td key={`prev-${prevMonthDays - i}`} className="px-2 py-8 text-center text-gray-400 border">
          {prevMonthDays - i}
        </td>,
      )
    }

    // Add current month's days
    const today = new Date()
    const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year

    for (let i = 1; i <= totalDays; i++) {
      const isToday = isCurrentMonth && today.getDate() === i
      days.push(
        <td key={`current-${i}`} className={`px-2 py-8 text-center border relative ${isToday ? "bg-red-100" : ""}`}>
          {i}
          {i === 28 && (
            <div className="absolute bottom-1 left-1 right-1 bg-yellow-100 text-xs p-1 rounded">🏆 Carcavelos Open</div>
          )}
        </td>,
      )
    }

    // Add next month's days
    const totalCells = Math.ceil((totalDays + firstDay) / 7) * 7
    for (let i = 1; i <= totalCells - (totalDays + firstDay); i++) {
      days.push(
        <td key={`next-${i}`} className="px-2 py-8 text-center text-gray-400 border">
          {i}
        </td>,
      )
    }

    // Group days into weeks
    const weeks = []
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(<tr key={`week-${i}`}>{days.slice(i, i + 7)}</tr>)
    }

    return weeks
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <TennisIcon className="w-12 h-12 mr-4" />
          <h1 className="text-4xl font-bold">Tournament Calendar</h1>
        </div>
        <Link href="/tournament/add" className="btn-primary flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add New Tournament
        </Link>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tournament Schedule</h2>

        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-semibold">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={goToToday} className="px-3 py-1 bg-gray-200 rounded-md text-sm">
              today
            </button>
            <button onClick={prevMonth} className="p-1 rounded-md hover:bg-gray-100">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextMonth} className="p-1 rounded-md hover:bg-gray-100">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-2 border text-center">Sun</th>
                <th className="py-2 border text-center">Mon</th>
                <th className="py-2 border text-center">Tue</th>
                <th className="py-2 border text-center">Wed</th>
                <th className="py-2 border text-center">Thu</th>
                <th className="py-2 border text-center">Fri</th>
                <th className="py-2 border text-center">Sat</th>
              </tr>
            </thead>
            <tbody>{renderCalendar()}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

