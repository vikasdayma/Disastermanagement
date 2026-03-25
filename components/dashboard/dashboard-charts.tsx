'use client'

import { Card } from '@/components/ui/card'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const lineData = [
  { time: '00:00', incidents: 12 },
  { time: '04:00', incidents: 18 },
  { time: '08:00', incidents: 24 },
  { time: '12:00', incidents: 31 },
  { time: '16:00', incidents: 28 },
  { time: '20:00', incidents: 35 },
  { time: '24:00', incidents: 42 },
]

const barData = [
  { type: 'Monsoon Floods', count: 145 },
  { type: 'Cyclones', count: 38 },
  { type: 'Heat Waves', count: 92 },
  { type: 'Earthquakes', count: 15 },
  { type: 'Landslides', count: 28 },
]

const pieData = [
  { name: 'Critical', value: 45 },
  { name: 'High', value: 123 },
  { name: 'Medium', value: 267 },
  { name: 'Low', value: 412 },
]

const COLORS = ['#ff006e', '#00ff88', '#00d9ff', '#6b7280']

export default function DashboardCharts() {
  return (
    <>
      <Card className="bg-card border-border p-6 neon-border">
        <h3 className="font-bold mb-4">Incidents Over Time</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e3a4c" />
            <XAxis dataKey="time" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ backgroundColor: '#111820', border: '1px solid #00d9ff' }} />
            <Line type="monotone" dataKey="incidents" stroke="#00d9ff" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card className="bg-card border-border p-6 neon-border">
        <h3 className="font-bold mb-4">By Type</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e3a4c" />
            <XAxis dataKey="type" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ backgroundColor: '#111820', border: '1px solid #00d9ff' }} />
            <Bar dataKey="count" fill="#00d9ff" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card className="bg-card border-border p-6 neon-border">
        <h3 className="font-bold mb-4">Severity Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" labelLine={false} label={{ fill: '#e0e8ff', fontSize: 12 }} outerRadius={80} fill="#00d9ff" dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#111820', border: '1px solid #00d9ff' }} />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </>
  )
}
