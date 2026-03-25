import { Card } from '@/components/ui/card'
import { AlertTriangle, Droplet, Flame } from 'lucide-react'
import Link from 'next/link'

interface IncidentCardProps {
  id: number
  type: string
  severity: string
  location: string
  source: string
  time: string
}

const typeIcons: Record<string, React.ReactNode> = {
  Earthquake: <AlertTriangle className="w-5 h-5" />,
  Flood: <Droplet className="w-5 h-5" />,
  Wildfire: <Flame className="w-5 h-5" />,
}

export default function IncidentCard({ id, type, severity, location, source, time }: IncidentCardProps) {
  const severityColor = severity === 'critical' ? 'text-accent' : 'text-secondary'
  const severityBg = severity === 'critical' ? 'bg-accent/10' : 'bg-secondary/10'

  return (
    <Link href={`/incidents/${id}`}>
      <Card className="bg-card border-border p-4 hover:border-primary transition cursor-pointer neon-glow">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <div className={`p-2 rounded-lg ${severityBg}`}>
              <div className={severityColor}>{typeIcons[type]}</div>
            </div>
            <div>
              <h4 className="font-semibold">{type}</h4>
              <p className="text-sm text-muted-foreground">📍 {location}</p>
            </div>
          </div>
          <div className="text-right">
            <span className={`text-xs font-mono px-2 py-1 rounded ${severityBg} ${severityColor}`}>
              {severity.toUpperCase()}
            </span>
            <p className="text-xs text-muted-foreground mt-2">{time}</p>
          </div>
        </div>
        <div className="flex gap-2 mt-3 text-xs text-muted-foreground">
          <span className="bg-muted/30 px-2 py-1 rounded">{source}</span>
        </div>
      </Card>
    </Link>
  )
}
