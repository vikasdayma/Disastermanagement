'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Download, Share2, AlertTriangle } from 'lucide-react'
import IncidentMap from '@/components/disaster/incident-map'
import { BackButton } from '@/components/ui/back-button'

export default function IncidentDetailsPage({ params }: { params: { id: string } }) {
  const incident = {
    id: params.id,
    type: 'Earthquake',
    severity: 'critical',
    location: 'Turkey',
    lat: 39.9,
    lng: 32.8,
    magnitude: 7.2,
    depth: '18 km',
    time: '2:45 PM UTC',
    source: 'US Geological Survey',
    affectedArea: '150+ km radius',
    status: 'Active Monitoring',
    relatedEvents: [
      { type: 'Aftershock', time: '5 min ago', magnitude: 5.1 },
      { type: 'Aftershock', time: '12 min ago', magnitude: 4.8 },
    ],
    updates: [
      'Initial 7.2 magnitude earthquake detected',
      'Multiple aftershocks reported in surrounding region',
      'Emergency services activated in major cities',
      'Search and rescue teams mobilized',
    ]
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <BackButton href="/incidents" label="Back to Incidents" />

        <div className="my-6 sm:my-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
            <AlertTriangle className="w-6 sm:w-8 h-6 sm:h-8 text-accent flex-shrink-0" />
            <h1 className="text-2xl sm:text-3xl font-bold">{incident.type}</h1>
            <span className="px-3 py-1 bg-accent/20 text-accent text-xs sm:text-sm font-mono rounded">CRITICAL</span>
          </div>
          <p className="text-sm sm:text-lg text-muted-foreground">{incident.location} • {incident.time}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
          {/* Map */}
          <div className="md:col-span-2">
            <Card className="bg-card border-border p-3 sm:p-4 neon-border">
              <IncidentMap lat={incident.lat} lng={incident.lng} />
            </Card>
          </div>

          {/* Details */}
          <div className="space-y-3 sm:space-y-4">
            <Card className="bg-card border-border p-4 neon-glow">
              <div className="text-muted-foreground text-xs mb-1">Magnitude</div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">{incident.magnitude}</div>
            </Card>
            <Card className="bg-card border-border p-4 neon-glow">
              <div className="text-muted-foreground text-xs mb-1">Depth</div>
              <div className="text-xl sm:text-2xl font-bold text-secondary">{incident.depth}</div>
            </Card>
            <Card className="bg-card border-border p-4 neon-glow">
              <div className="text-muted-foreground text-xs mb-1">Status</div>
              <div className="text-base sm:text-lg font-semibold text-green-400">{incident.status}</div>
            </Card>
            <div className="flex gap-2">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1 text-xs sm:text-sm" size="sm">
                <Download className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
                Report
              </Button>
              <Button variant="outline" className="border-border flex-1 text-xs sm:text-sm" size="sm">
                <Share2 className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Timeline & Related */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <Card className="bg-card border-border p-4 sm:p-6 neon-border">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Event Timeline</h2>
            <div className="space-y-4">
              {incident.updates.map((update, i) => (
                <div key={i} className="flex gap-3 sm:gap-4 pb-4 border-b border-border last:border-0">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1 flex-shrink-0" />
                  <p className="text-xs sm:text-sm">{update}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-card border-border p-4 sm:p-6 neon-border">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Related Events</h2>
            <div className="space-y-3">
              {incident.relatedEvents.map((event, i) => (
                <div key={i} className="p-3 bg-muted/30 border border-border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-secondary text-sm">{event.type}</p>
                      <p className="text-xs text-muted-foreground">{event.time}</p>
                    </div>
                    <span className="text-xs sm:text-sm font-mono text-primary">{event.magnitude}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
