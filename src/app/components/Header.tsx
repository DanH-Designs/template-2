import { useAuth } from '@/lib/hooks/useAuth'
import { Button } from './ui/button'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

interface NavItem {
  title: string
  href: string
  icon: string
}

const navItems: NavItem[] = [
  { title: 'Dashboard', href: '/', icon: '🏠' },
  { title: 'Pitch Management', href: '/pitches', icon: '🏟️' },
  { title: 'Team Management', href: '/teams', icon: '⚽' },
  { title: 'Training Sessions', href: '/training', icon: '🎯' },
  { title: 'Fixtures', href: '/fixtures', icon: '📅' },
  { title: 'Reports', href: '/reports', icon: '📊' },
  { title: 'Settings', href: '/settings', icon: '⚙️' },
]

export default function Header() {
  const { signOut } = useAuth()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const pathname = usePathname()

  // Function to get the current page title
  const getCurrentPageTitle = () => {
    if (pathname === '/') return 'Elloughton Blackburn F.C. - Pitch Management Tool'
    const currentNav = navItems.find(item => item.href === pathname)
    return currentNav ? currentNav.title : 'Elloughton Blackburn F.C. - Pitch Management Tool'
  }

  return (
    <header className="bg-[#1e3a8a] text-white shadow-lg relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left section with Navigation Menu Button and Logo */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-white hover:bg-blue-800"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <Bars3Icon className="h-6 w-6" />
            </Button>
            <Image
              src="/club-logo.png"
              alt="EBFC Logo"
              width={64}
              height={64}
              className="object-contain h-16 w-auto"
            />
          </div>

          {/* Centered Title and Tagline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-xl font-semibold">{getCurrentPageTitle()}</h1>
            <p className="text-yellow-400 text-sm">EBFC - More Than Football.</p>
          </div>

          {/* Sign Out Button */}
          <Button
            variant="ghost"
            className="text-white hover:bg-blue-800"
            onClick={signOut}
          >
            Sign Out
          </Button>
        </div>
      </div>

      {/* Navigation Menu */}
      {isNavOpen && (
        <div className="absolute top-16 left-0 w-64 bg-white shadow-lg rounded-br-lg z-50">
          <nav className="py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsNavOpen(false)}
              >
                <div
                  className={`px-4 py-2 flex items-center space-x-3 hover:bg-gray-100 ${
                    pathname === item.href ? 'bg-gray-100' : ''
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-900">{item.title}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
} 