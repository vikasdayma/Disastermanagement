'use client'

import { Card } from '@/components/ui/card'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts'

const trendData = [
  { date: '1 Nov', incidents: 68, avg: 52 },
  { date: '5 Nov', incidents: 82, avg: 61 },
  { date: '10 Nov', incidents: 75, avg: 65 },
  { date: '15 Nov', incidents: 91, avg: 72 },
  { date: '20 Nov', incidents: 87, avg: 78 },
  { date: '25 Nov', incidents: 104, avg: 85 },
  { date: '30 Nov', incidents: 112, avg: 92 },
]

const regionData = [
  { region: 'Coastal (Tamil Nadu, Kerala, Goa)', incidents: 245 },
  { region: 'Western (Gujarat, Maharashtra)', incidents: 198 },
  { region: 'Eastern (West Bengal, Odisha)', incidents: 187 },
  { region: 'Northern (Himachal, Uttarakhand)', incidents: 156 },
  { region: 'Central (MP, Chhattisgarh)', incidents: 132 },
]

const sourceData = [
  { name: 'IMD/NDMA', value: 32 },
  { name: 'Twitter', value: 28 },
  { name: 'News', value: 25 },
  { name: 'Local Agencies', value: 15 },
]

export default function AnalyticsCharts() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-card border-border p-6 neon-border">
          <h3 className="font-bold mb-4">Incident Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="colorIncidents" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00d9ff" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00d9ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e3a4c" />
              <XAxis dataKey="date" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip contentStyle={{ backgroundColor: '#111820', border: '1px solid #00d9ff' }} />
              <Area type="monotone" dataKey="incidents" stroke="#00d9ff" fillOpacity={1} fill="url(#colorIncidents)" />
              <Line type="monotone" dataKey="avg" stroke="#00ff88" strokeDasharray="5 5" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="bg-card border-border p-6 neon-border">
          <h3 className="font-bold mb-4">By Region</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={regionData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1e3a4c" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis dataKey="region" type="category" stroke="#6b7280" />
              <Tooltip contentStyle={{ backgroundColor: '#111820', border: '1px solid #00d9ff' }} />
              <Bar dataKey="incidents" fill="#00ff88" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="bg-card border-border p-6 neon-border md:col-span-2">
          <h3 className="font-bold mb-4">Source Breakdown</h3>
          <div className="grid grid-cols-4 gap-4">
            {sourceData.map((source) => (
              <div key={source.name} className="text-center p-4 bg-muted/30 rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">{source.value}%</div>
                <p className="text-sm text-muted-foreground mt-2">{source.name}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
