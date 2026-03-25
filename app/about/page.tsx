import { Card } from '@/components/ui/card'
import { Code2, Database, Shield, Zap } from 'lucide-react'
import { BackButton } from '@/components/ui/back-button'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <BackButton href="/dashboard" label="Back to Dashboard" />

        <div className="mb-8 sm:mb-12 mt-6 sm:mt-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">About AlertHive</h1>
          <p className="text-sm sm:text-lg text-muted-foreground">
            Real-Time Disaster Information Aggregation System for India
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {[
            { title: 'Multi-Source Integration', desc: 'Aggregates data from 18+ Indian agencies and sources', icon: Database },
            { title: 'Real-Time Processing', desc: 'Process and normalize data in milliseconds', icon: Zap },
            { title: 'Data Security', desc: 'Enterprise-grade security with encryption', icon: Shield },
            { title: 'Developer Friendly', desc: 'RESTful API with comprehensive documentation', icon: Code2 },
          ].map((item, i) => (
            <Card key={i} className="bg-card border-border p-4 sm:p-6 neon-glow">
              <item.icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary mb-3 sm:mb-4" />
              <h3 className="font-bold text-base sm:text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{item.desc}</p>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border p-6 sm:p-8 neon-border">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">System Uptime</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: '99.95%', label: 'Availability' },
              { metric: '<50ms', label: 'Avg Response Time' },
              { metric: '24h', label: 'Data Retention' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                <p className="text-muted-foreground text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
