'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { AlertTriangle, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react'
import { BackButton } from '@/components/ui/back-button'

export default function BuildingDamagePage() {
  const [formData, setFormData] = useState({
    disasterType: 'monsoon-flood',
    buildingType: 'residential',
    buildingAge: '15',
    constructionMaterial: 'concrete',
    location: '',
    severityLevel: 5,
    description: '',
    damageIndicators: [] as string[],
  })

  const [showResults, setShowResults] = useState(false)
  const [assessment, setAssessment] = useState<any>(null)

  const damageOptions = [
    'Visible cracks in walls',
    'Roof damage',
    'Window/door failure',
    'Foundation issues',
    'Partial collapse',
    'Electrical hazards',
    'Gas leaks',
  ]

  const handleToggleDamage = (indicator: string) => {
    setFormData((prev) => ({
      ...prev,
      damageIndicators: prev.damageIndicators.includes(indicator)
        ? prev.damageIndicators.filter((i) => i !== indicator)
        : [...prev.damageIndicators, indicator],
    }))
  }

  const generateAssessment = () => {
    const baseSeverity = parseInt(formData.severityLevel.toString()) * 10 + formData.damageIndicators.length * 8
    const riskScore = Math.min(100, Math.max(0, baseSeverity))

    let damageLevel = 'Low'
    let urgency = 'Monitor'

    if (riskScore >= 75) {
      damageLevel = 'Collapse Risk'
      urgency = 'IMMEDIATE EVACUATION'
    } else if (riskScore >= 50) {
      damageLevel = 'High'
      urgency = 'Immediate action required'
    } else if (riskScore >= 25) {
      damageLevel = 'Medium'
      urgency = 'Evaluation needed'
    }

    const secondaryRisks = []
    if (formData.damageIndicators.includes('Electrical hazards')) secondaryRisks.push('Electrical fire risk')
    if (formData.damageIndicators.includes('Gas leaks')) secondaryRisks.push('Gas explosion hazard')
    if (formData.disasterType === 'earthquake') secondaryRisks.push('Aftershock collapse risk')
    if (formData.disasterType === 'cyclone') secondaryRisks.push('Strong wind damage risk')
    if (formData.disasterType === 'heat-wave') secondaryRisks.push('Thermal stress risk')

    setAssessment({
      riskScore,
      damageLevel,
      urgency,
      secondaryRisks: secondaryRisks.length > 0 ? secondaryRisks : ['No secondary risks detected'],
      evacuationGuidance:
        riskScore >= 50
          ? `IMMEDIATE EVACUATION: All occupants must evacuate immediately. Use stairs only, do not use elevators. Meet at designated assembly points at least 200 feet from the building.`
          : `Monitor building. Avoid heavily damaged areas. Keep emergency contacts ready. Be prepared to evacuate if conditions worsen.`,
      structuralHazards: [
        riskScore >= 50 ? 'Structural integrity compromised' : 'Structure appears stable',
        formData.damageIndicators.includes('Foundation issues') ? 'Foundation damage detected' : 'Foundation status unknown',
        formData.damageIndicators.includes('Partial collapse')
          ? 'Partial collapse risk - High hazard zone'
          : 'No collapse indicators',
      ],
      recommendedActions: [
        'Document all damages with photos and video',
        'Contact local emergency services',
        'Do not touch damaged electrical lines',
        'Assess structural integrity from distance',
        'Contact insurance provider',
        'Arrange temporary shelter if needed',
      ],
    })

    setShowResults(true)
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <BackButton href="/dashboard" label="Back to Dashboard" />

        <div className="my-6 sm:my-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Building Damage Assessment</h1>
          <p className="text-xs sm:text-base text-muted-foreground">
            Evaluate structural damage and get recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {/* Form Section */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="bg-card border-border p-4 sm:p-6 neon-glow">
              <h2 className="text-lg sm:text-xl font-bold mb-4">Building Information</h2>

              {/* Disaster Type */}
              <div className="mb-4">
                <label className="block text-xs sm:text-sm font-medium mb-2">Disaster Type</label>
                <select
                  value={formData.disasterType}
                  onChange={(e) => setFormData({ ...formData, disasterType: e.target.value })}
                  className="w-full bg-input border border-border rounded-lg px-3 py-2 text-xs sm:text-sm"
                >
                  <option value="monsoon-flood">Monsoon Flooding</option>
                  <option value="cyclone">Cyclone</option>
                  <option value="earthquake">Earthquake</option>
                  <option value="heat-wave">Heat Wave</option>
                  <option value="landslide">Landslide</option>
                  <option value="flash-flood">Flash Flood</option>
                </select>
              </div>

              {/* Building Type */}
              <div className="mb-4">
                <label className="block text-xs sm:text-sm font-medium mb-2">Building Type</label>
                <select
                  value={formData.buildingType}
                  onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                  className="w-full bg-input border border-border rounded-lg px-3 py-2 text-xs sm:text-sm"
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="government">Government</option>
                  <option value="healthcare">Healthcare</option>
                </select>
              </div>

              {/* Building Age */}
              <div className="mb-4">
                <label className="block text-xs sm:text-sm font-medium mb-2">Building Age (years)</label>
                <input
                  type="number"
                  value={formData.buildingAge}
                  onChange={(e) => setFormData({ ...formData, buildingAge: e.target.value })}
                  className="w-full bg-input border border-border rounded-lg px-3 py-2 text-xs sm:text-sm"
                  min="0"
                  max="150"
                />
              </div>

              {/* Construction Material */}
              <div className="mb-4">
                <label className="block text-xs sm:text-sm font-medium mb-2">Construction Material</label>
                <select
                  value={formData.constructionMaterial}
                  onChange={(e) => setFormData({ ...formData, constructionMaterial: e.target.value })}
                  className="w-full bg-input border border-border rounded-lg px-3 py-2 text-xs sm:text-sm"
                >
                  <option value="concrete">Reinforced Concrete</option>
                  <option value="steel">Steel Frame</option>
                  <option value="wood">Wood Frame</option>
                  <option value="masonry">Masonry/Brick</option>
                  <option value="mixed">Mixed Materials</option>
                </select>
              </div>

              {/* Location */}
              <div className="mb-4">
                <label className="block text-xs sm:text-sm font-medium mb-2">Location</label>
                <input
                  type="text"
                  placeholder="City, Country"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-input border border-border rounded-lg px-3 py-2 text-xs sm:text-sm"
                />
              </div>

              {/* Severity Level */}
              <div className="mb-4">
                <label className="block text-xs sm:text-sm font-medium mb-2">Severity Level: {formData.severityLevel}/10</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.severityLevel}
                  onChange={(e) => setFormData({ ...formData, severityLevel: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>
            </Card>

            <Card className="bg-card border-border p-4 sm:p-6 neon-glow">
              <h2 className="text-lg sm:text-xl font-bold mb-4">Visible Damage Indicators</h2>
              <div className="space-y-3">
                {damageOptions.map((indicator) => (
                  <label key={indicator} className="flex items-center gap-3 cursor-pointer p-2 hover:bg-muted/50 rounded">
                    <input
                      type="checkbox"
                      checked={formData.damageIndicators.includes(indicator)}
                      onChange={() => handleToggleDamage(indicator)}
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-xs sm:text-sm">{indicator}</span>
                  </label>
                ))}
              </div>
            </Card>

            <Card className="bg-card border-border p-4 sm:p-6 neon-glow">
              <h2 className="text-lg sm:text-xl font-bold mb-4">Situation Description</h2>
              <textarea
                placeholder="Describe the building condition and any additional concerns..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-input border border-border rounded-lg px-3 py-2 text-xs sm:text-sm h-24 resize-none"
              />
              <Button
                onClick={generateAssessment}
                className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-bold"
                size="lg"
              >
                Generate Assessment
              </Button>
            </Card>
          </div>

          {/* Results Section */}
          {showResults && assessment && (
            <div className="space-y-4 sm:space-y-6">
              {/* Risk Score Card */}
              <Card
                className={`bg-card border-2 p-4 sm:p-6 ${
                  assessment.riskScore >= 75
                    ? 'border-accent neon-glow-pink'
                    : assessment.riskScore >= 50
                      ? 'border-secondary neon-glow-green'
                      : 'border-primary neon-glow'
                }`}
              >
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl font-bold mb-2 text-primary">{assessment.riskScore}</div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">RISK SCORE</p>
                  <div
                    className={`inline-block px-4 py-2 rounded font-bold text-xs sm:text-sm ${
                      assessment.riskScore >= 75
                        ? 'bg-accent/20 text-accent'
                        : assessment.riskScore >= 50
                          ? 'bg-secondary/20 text-secondary'
                          : 'bg-primary/20 text-primary'
                    }`}
                  >
                    {assessment.damageLevel}
                  </div>
                  <p className="text-xxs sm:text-xs text-muted-foreground mt-3">{assessment.urgency}</p>
                </div>
              </Card>

              {/* Evacuation Guidance */}
              <Card className={`bg-card border-2 p-4 sm:p-6 ${assessment.riskScore >= 50 ? 'border-accent neon-glow-pink' : 'border-primary neon-glow'}`}>
                <div className="flex gap-3 mb-4">
                  {assessment.riskScore >= 50 ? (
                    <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                  <h3 className="font-bold text-sm sm:text-base">Evacuation Guidance</h3>
                </div>
                <p className="text-sm sm:text-base">{assessment.evacuationGuidance}</p>
              </Card>

              {/* Structural Hazards */}
              <Card className="bg-card border-border p-4 sm:p-6 neon-glow">
                <h3 className="font-bold text-sm sm:text-base mb-3">Structural Hazards</h3>
                <div className="space-y-2">
                  {assessment.structuralHazards.map((hazard: string, i: number) => (
                    <div key={i} className="flex gap-2 text-sm sm:text-base">
                      <span className="text-secondary">•</span>
                      <span>{hazard}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Secondary Risk Predictions */}
              <Card className="bg-card border-border p-4 sm:p-6 neon-glow">
                <h3 className="font-bold text-sm sm:text-base mb-3">Secondary Risk Predictions</h3>
                <div className="space-y-2">
                  {assessment.secondaryRisks.map((risk: string, i: number) => (
                    <div key={i} className="flex gap-2 text-sm sm:text-base">
                      <span className="text-accent">⚠</span>
                      <span>{risk}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recommended Actions */}
              <Card className="bg-card border-border p-4 sm:p-6 neon-glow">
                <h3 className="font-bold text-sm sm:text-base mb-3">Recommended Actions</h3>
                <ol className="space-y-2 text-sm sm:text-base">
                  {assessment.recommendedActions.map((action: string, i: number) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary font-bold">{i + 1}.</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ol>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
