'use client'

import { useAuth } from '@/lib/hooks/useAuth'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from './components/Header'
import DashboardCard from './components/DashboardCard'
import GoogleSignInButton from './components/GoogleSignInButton'
import Image from 'next/image'

export default function Home() {
  const { user, signInWithGoogle } = useAuth()
  const router = useRouter()

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white px-8 py-12 shadow-lg rounded-lg">
            <div className="text-center mb-8">
              <Image
                src="/club-logo.png"
                alt="EBFC Logo"
                width={40}
                height={40}
                className="mx-auto mb-6"
              />
              <h1 className="text-2xl font-normal text-gray-900 mb-2">
                Sign in to the
              </h1>
              <h2 className="text-xl font-medium text-gray-900">
                EBFC Pitch Management Tool
              </h2>
            </div>
            <div className="space-y-6">
              <GoogleSignInButton onClick={signInWithGoogle} />
              <p className="text-sm text-center text-gray-600">
                This application is for authorized users only
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard
            title="Pitch Management"
            description="Manage pitch allocations and schedules"
            icon="🏟️"
            href="/pitches"
          />
          <DashboardCard
            title="Team Management"
            description="Manage teams and squad information"
            icon="⚽"
            href="/teams"
          />
          <DashboardCard
            title="Training Sessions"
            description="Schedule and manage training sessions"
            icon="🎯"
          />
          <DashboardCard
            title="Fixtures"
            description="View and manage upcoming fixtures"
            icon="📅"
          />
          <DashboardCard
            title="Reports"
            description="Generate reports and analytics"
            icon="📊"
          />
          <DashboardCard
            title="Settings"
            description="Configure application settings"
            icon="⚙️"
          />
        </div>
      </main>
    </div>
  )
}
