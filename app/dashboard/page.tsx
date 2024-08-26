import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Dashboard() {
  const { data: session } = useSession()

  if (!session) {
    return <p>Loading...</p>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Link href="/charts/create" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Create Chart
      </Link>
      <Link href="/charts/history" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Chart History
      </Link>
      
    </div>
  )
}
