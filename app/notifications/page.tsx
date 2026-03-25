'use client'

import { Card } from '@/components/ui/card'
import { Bell, Mail, MessageSquare, ToggleLeft as Toggle2 } from 'lucide-react'
import { BackButton } from '@/components/ui/back-button'

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <BackButton href="/dashboard" label="Back to Dashboard" />

        <div className="my-6 sm:my-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Notifications</h1>
          <p className="text-xs sm:text-base text-muted-foreground">Manage your alert preferences</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {[
            { title: 'Critical Alerts', desc: 'Magnitude 6.0+ earthquakes, major floods', icon: Bell },
            { title: 'Email Notifications', desc: 'Daily digest and critical events', icon: Mail },
            { title: 'SMS Alerts', desc: 'Immediate mobile alerts for emergencies', icon: MessageSquare },
          ].map((notif, i) => (
            <Card key={i} className="bg-card border-border p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 neon-glow">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">
                <notif.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary flex-shrink-0 mt-1 sm:mt-0" />
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base">{notif.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{notif.desc}</p>
                </div>
              </div>
              <Toggle2 className="w-5 sm:w-6 h-5 sm:h-6 text-secondary cursor-pointer flex-shrink-0" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
