'use client'

import { Card } from '@/components/ui/card'
import AnalyticsCharts from '@/components/analytics/analytics-charts'
import { BackButton } from '@/components/ui/back-button'

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <BackButton href="/dashboard" label="Back to Dashboard" />

        <div className="my-6 sm:my-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Analytics</h1>
          <p className="text-xs sm:text-base text-muted-foreground">Comprehensive incident analysis</p>
        </div>

        <AnalyticsCharts />
      </div>
    </div>
  )
}
