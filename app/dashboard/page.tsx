'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { AlertTriangle, Bell, User, Search, Menu } from 'lucide-react'
import DashboardCharts from '@/components/dashboard/dashboard-charts'
import IncidentCard from '@/components/dashboard/incident-card'
import { BackButton } from '@/components/ui/back-button'

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const incidents = [
    { id: 1, type: 'Monsoon Flooding', severity: 'critical', location: 'Mumbai, Maharashtra', source: 'Gov', time: '2 min ago' },
    { id: 2, type: 'Cyclone', severity: 'high', location: 'Tamil Nadu Coast', source: 'Twitter', time: '15 min ago' },
    { id: 3, type: 'Flash Flood', severity: 'high', location: 'Gujarat', source: 'News', time: '45 min ago' },
  ]

  const navItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Incidents', href: '/incidents' },
    { label: 'Analytics', href: '/analytics' },
    { label: 'Building Damage', href: '/building-damage' },
    { label: 'Case Advisor', href: '/case-advisor' },
    { label: 'Notifications', href: '/notifications' },
    { label: 'About', href: '/about' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-full md:w-64' : 'w-20'} bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col ${!sidebarOpen && 'md:flex'}`}>
        <div className="p-3 sm:p-4 flex items-center justify-between">
          <div className={`text-base sm:text-lg font-bold glitch-text ${!sidebarOpen && 'hidden'}`}>AlertHive</div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-sidebar-accent/10 rounded">
            <Menu className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 px-2 space-y-2 mt-4 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-primary/10 text-sidebar-foreground hover:text-sidebar-primary transition text-sm"
            >
              <div className="w-4 sm:w-5 h-4 sm:h-5 rounded bg-sidebar-border flex-shrink-0" />
              <span className={sidebarOpen ? '' : 'hidden'}>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <div className="sticky top-0 bg-background border-b border-border px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
            <Search className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground flex-shrink-0" />
            <input type="text" placeholder="Search..." className="bg-input border border-border rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm flex-1 placeholder:text-muted-foreground" />
          </div>
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Button variant="ghost" size="icon" className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Bell className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 sm:w-10 sm:h-10">
              <User className="w-4 sm:w-5 h-4 sm:h-5" />
            </Button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Real-Time Incident Dashboard</h1>
            <p className="text-xs sm:text-base text-muted-foreground">Monitor and analyze disaster events</p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            {[
              { label: 'Critical', value: '12', color: 'text-accent' },
              { label: 'High', value: '34', color: 'text-secondary' },
              { label: 'Medium', value: '67', color: 'text-primary' },
              { label: 'Low', value: '89', color: 'text-muted-foreground' }
            ].map((kpi) => (
              <Card key={kpi.label} className="bg-card border-border p-3 sm:p-4 neon-glow">
                <div className="text-muted-foreground text-xs">{kpi.label}</div>
                <div className={`text-xl sm:text-3xl font-bold ${kpi.color}`}>{kpi.value}</div>
              </Card>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <DashboardCharts />
          </div>

          {/* Incident Feed */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
              Live Feed
            </h2>
            <div className="space-y-2 sm:space-y-3">
              {incidents.map((incident) => (
                <IncidentCard key={incident.id} {...incident} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
