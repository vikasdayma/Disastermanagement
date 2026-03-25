'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Search, Filter, Download } from 'lucide-react'
import { useState } from 'react'
import { BackButton } from '@/components/ui/back-button'

export default function IncidentsPage() {
  const [filter, setFilter] = useState('all')

  const incidents = [
    { id: 1, type: 'Monsoon Flooding', severity: 'critical', location: 'Mumbai, Maharashtra', lat: '19.0760', lng: '72.8777', source: 'IMD', time: '2 min ago', desc: 'Heavy monsoon rainfall causing severe flooding in coastal areas' },
    { id: 2, type: 'Cyclone Warning', severity: 'high', location: 'Chennai, Tamil Nadu', lat: '13.0827', lng: '80.2707', source: 'Gov', time: '15 min ago', desc: 'Cyclone warning issued for Tamil Nadu and Andhra Pradesh coasts' },
    { id: 3, type: 'Flash Flood Alert', severity: 'high', location: 'Ahmedabad, Gujarat', lat: '23.0225', lng: '72.5714', source: 'Twitter', time: '45 min ago', desc: 'Flash floods reported in multiple districts after heavy downpour' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <BackButton href="/dashboard" label="Back to Dashboard" />

        <div className="my-6 sm:my-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Disaster Incidents</h1>
          <p className="text-xs sm:text-base text-muted-foreground">Browse and filter all events</p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-6">
          <input type="text" placeholder="Search..." className="bg-input border border-border rounded-lg px-3 py-2 text-xs sm:text-sm col-span-1 sm:col-span-2" />
          <select className="bg-input border border-border rounded-lg px-3 py-2 text-xs sm:text-sm">
            <option>All Severity</option>
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
          </select>
          <Button variant="outline" className="border-border text-xs sm:text-sm">
            <Filter className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" /> Filters
          </Button>
        </div>

        {/* Incidents List */}
        <div className="space-y-2 sm:space-y-4">
          {incidents.map((incident) => (
            <Link key={incident.id} href={`/incidents/${incident.id}`}>
              <Card className="bg-card border-border p-3 sm:p-4 hover:border-primary transition cursor-pointer neon-glow">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1 sm:mb-2">
                      <h3 className="text-base sm:text-lg font-semibold">{incident.type}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-mono ${
                        incident.severity === 'critical' ? 'bg-accent/20 text-accent' : 'bg-secondary/20 text-secondary'
                      }`}>{incident.severity.toUpperCase()}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 line-clamp-2">{incident.desc}</p>
                    <div className="flex flex-wrap gap-2 sm:gap-4 text-xs text-muted-foreground">
                      <span>📍 {incident.location}</span>
                      <span>🕐 {incident.time}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs sm:text-sm">View</Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
