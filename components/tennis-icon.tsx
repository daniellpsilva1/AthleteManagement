export default function TennisIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#B7F04F" stroke="#000000" strokeWidth="1.5" />
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c2.11 0 4.01.9 5.35 2.33-1.12 1.41-2.4 2.11-3.79 2.11-1.39 0-2.67-.7-3.79-2.11C11.01 4.9 12.9 4 15 4zM8.5 8.5c1.25 0 2.25.89 2.25 2s-1 2-2.25 2-2.25-.89-2.25-2 1-2 2.25-2zm7 0c1.25 0 2.25.89 2.25 2s-1 2-2.25 2-2.25-.89-2.25-2 1-2 2.25-2zm-3.5 6c1.25 0 2.25.89 2.25 2s-1 2-2.25 2-2.25-.89-2.25-2 1-2 2.25-2z"
        fill="#B7F04F"
      />
    </svg>
  )
}

