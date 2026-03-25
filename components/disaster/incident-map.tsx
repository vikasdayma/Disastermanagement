interface IncidentMapProps {
  lat: number
  lng: number
}

export default function IncidentMap({ lat, lng }: IncidentMapProps) {
  return (
    <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-lg border border-primary/30 flex items-center justify-center relative overflow-hidden">
      {/* Simple map visualization */}
      <svg className="w-full h-full absolute inset-0" viewBox="0 0 800 400" preserveAspectRatio="none">
        <defs>
          <radialGradient id="epicenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00d9ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Grid background */}
        <g stroke="#1e3a4c" strokeWidth="1" opacity="0.3">
          <line x1="0" y1="0" x2="800" y2="0" />
          <line x1="0" y1="100" x2="800" y2="100" />
          <line x1="0" y1="200" x2="800" y2="200" />
          <line x1="0" y1="300" x2="800" y2="300" />
          <line x1="0" y1="400" x2="800" y2="400" />
          <line x1="0" y1="0" x2="0" y2="400" />
          <line x1="200" y1="0" x2="200" y2="400" />
          <line x1="400" y1="0" x2="400" y2="400" />
          <line x1="600" y1="0" x2="600" y2="400" />
          <line x1="800" y1="0" x2="800" y2="400" />
        </g>

        {/* Epicenter */}
        <circle cx="400" cy="200" r="60" fill="url(#epicenter)" />
        <circle cx="400" cy="200" r="8" fill="#00d9ff" />
        
        {/* Aftershocks */}
        <circle cx="350" cy="180" r="4" fill="#00ff88" opacity="0.8" />
        <circle cx="430" cy="240" r="3" fill="#00ff88" opacity="0.6" />
        <circle cx="380" cy="250" r="3" fill="#00ff88" opacity="0.5" />
      </svg>

      {/* Legend overlay */}
      <div className="absolute bottom-4 left-4 text-xs space-y-2 z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span>Epicenter: {lat}°N, {lng}°E</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-secondary" />
          <span>Aftershocks</span>
        </div>
      </div>
    </div>
  )
}
