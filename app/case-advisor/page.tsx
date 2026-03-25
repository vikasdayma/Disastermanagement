'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { AlertTriangle, ArrowLeft, AlertCircle, Shield, Clock } from 'lucide-react'
import { useCallback } from 'react'
import { BackButton } from '@/components/ui/back-button'

export default function CaseAdvisorPage() {
  const [formData, setFormData] = useState({
    disasterCategory: 'monsoon',
    description: '',
    peopleInvolved: '500',
    location: '',
    severityLevel: 5,
  })

  const [showResults, setShowResults] = useState(false)
  const [analysis, setAnalysis] = useState<any>(null)

  const categories = [
    { value: 'monsoon', label: 'Monsoon Flooding (Common in India)' },
    { value: 'cyclone', label: 'Cyclone/Typhoon (Coastal)' },
    { value: 'earthquake', label: 'Earthquake' },
    { value: 'heat-wave', label: 'Heat Wave Emergency' },
    { value: 'landslide', label: 'Landslide/Mudslide' },
    { value: 'infrastructure', label: 'Infrastructure Collapse' },
  ]

  const analyzeDisasterScenario = useCallback(() => {
    const categoryMap: Record<string, string> = {
      monsoon: 'Monsoon Flooding Disaster',
      cyclone: 'Cyclone Emergency',
      earthquake: 'Earthquake Disaster',
      'heat-wave': 'Heat Wave Emergency',
      landslide: 'Landslide Disaster',
      infrastructure: 'Infrastructure Emergency',
    }

    const severity = parseInt(formData.severityLevel.toString())
    const riskLevel = severity >= 8 ? 'Critical' : severity >= 5 ? 'High' : 'Medium'
    const riskBadgeColor =
      riskLevel === 'Critical' ? 'bg-accent/20 text-accent' : riskLevel === 'High' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'

    const immediateActions = {
      monsoon: [
        'Activate emergency protocols immediately',
        'Issue evacuation orders for at-risk areas',
        'Establish incident command center',
        'Mobilize emergency medical teams',
        'Notify regional disaster management authorities',
      ],
      cyclone: [
        'Issue severe weather alerts to all channels',
        'Shelter in place notifications',
        'Activate emergency operations center',
        'Pre-position rescue equipment',
        'Brief emergency response teams',
      ],
      earthquake: [
        'Call 911 and fire department immediately',
        'Evacuate building using nearest exit',
        'Account for all building occupants',
        'Do not use elevators',
        'Meet at designated assembly point',
      ],
      'heat-wave': [
        'Activate heat wave emergency plan',
        'Provide hydration stations',
        'Check on vulnerable populations',
        'Establish cooling centers',
        'Coordinate with healthcare providers',
      ],
      landslide: [
        'Secure the affected area',
        'Conduct damage assessment',
        'Issue shelter-in-place orders if needed',
        'Contact utility companies',
        'Brief engineering teams',
      ],
      infrastructure: [
        'Secure the affected area',
        'Conduct damage assessment',
        'Issue shelter-in-place orders if needed',
        'Contact utility companies',
        'Brief engineering teams',
      ],
    }

    const followUpActions = {
      monsoon: [
        'Conduct search and rescue operations',
        'Establish emergency shelters',
        'Distribute emergency supplies',
        'Begin damage assessment surveys',
        'Coordinate with NGOs for aid',
      ],
      cyclone: [
        'Clear roadways and debris',
        'Restore utilities to affected areas',
        'Begin damage documentation',
        'Support mental health resources',
        'Plan recovery communications',
      ],
      earthquake: [
        'Cool and extinguish remaining hot spots',
        'Document fire scene for investigation',
        'Begin environmental assessment',
        'Contact insurance adjusters',
        'Initiate recovery operations',
      ],
      'heat-wave': [
        'Monitor air quality and humidity levels',
        'Provide medical monitoring for heat exhaustion',
        'Begin environmental assessment',
        'Contact insurance adjusters',
        'Initiate recovery operations',
      ],
      landslide: [
        'Begin repairs and stabilization',
        'Restore essential services',
        'Begin temporary housing if needed',
        'Conduct structural engineering assessment',
        'Plan long-term recovery',
      ],
      infrastructure: [
        'Begin repairs and stabilization',
        'Restore essential services',
        'Begin temporary housing if needed',
        'Conduct structural engineering assessment',
        'Plan long-term recovery',
      ],
    }

    const safetyPrecautions = [
      'Wear appropriate PPE at all times',
      'Never enter unstable structures',
      'Avoid contaminated water and air',
      'Use buddy system for all operations',
      'Monitor for secondary hazards',
      'Establish communication protocols',
      'Document all exposure incidents',
    ]

    const resources = [
      severity >= 8 ? 'National Guard activation' : 'State police support',
      'Specialized rescue teams',
      'Medical personnel and supplies',
      'Communication equipment',
      'Food and water supplies',
      'Temporary shelter materials',
      'Heavy equipment operators',
    ]

    const warnings =
      severity >= 8
        ? [
            'Life-threatening conditions present',
            'Multiple critical systems compromised',
            'Cascading failures likely',
            'Extended recovery timeline',
            'Regional resource depletion possible',
          ]
        : severity >= 5
          ? [
              'Significant damage expected',
              'Multiple emergency services needed',
              'Recovery will take weeks',
              'Economic impact significant',
            ]
          : ['Manageable with standard protocols', 'Local resources should be sufficient', 'Recovery in days to weeks']

    setAnalysis({
      disasterType: categoryMap[formData.disasterCategory],
      riskLevel,
      riskBadgeColor,
      peopleAffected: formData.peopleInvolved,
      immediateActions: immediateActions[formData.disasterCategory] || [],
      followUpActions: followUpActions[formData.disasterCategory] || [],
      safetyPrecautions,
      resources,
      warnings,
      copyablePlan: generateCopyableSafetyPlan(
        categoryMap[formData.disasterCategory],
        immediateActions[formData.disasterCategory] || [],
        followUpActions[formData.disasterCategory] || [],
        safetyPrecautions
      ),
    })

    setShowResults(true)
  }, [formData])

  const generateCopyableSafetyPlan = (
    type: string,
    immediate: string[],
    followUp: string[],
    precautions: string[]
  ): string => {
    return `DISASTER SAFETY PLAN - ${type}

IMMEDIATE ACTIONS (First 5 Minutes):
${immediate.map((a, i) => `${i + 1}. ${a}`).join('\n')}

FOLLOW-UP ACTIONS (First 30 Minutes):
${followUp.map((a, i) => `${i + 1}. ${a}`).join('\n')}

SAFETY PRECAUTIONS:
${precautions.map((p, i) => `${i + 1}. ${p}`).join('\n')}

Generated by AlertHive Disaster Case Advisor`
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(analysis.copyablePlan)
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6">
      <div className="max-w-5xl mx-auto">
        <BackButton href="/dashboard" label="Back to Dashboard" />

        <div className="my-6 sm:my-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Disaster Case Advisor</h1>
          <p className="text-xs sm:text-base text-muted-foreground">
            Enter disaster scenarios for AI-powered recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {/* Input Form */}
          <div className="md:col-span-1">
            <Card className="bg-card border-border p-4 sm:p-6 neon-glow sticky top-6">
              <h2 className="text-lg sm:text-xl font-bold mb-4">Scenario Analysis</h2>

              {/* Disaster Category */}
              <div className="mb-4">
                <label className="block text-sm sm:text-base font-medium mb-2">Disaster Category</label>
                <select
                  value={formData.disasterCategory}
                  onChange={(e) => setFormData({ ...formData, disasterCategory: e.target.value })}
                  className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm sm:text-base"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* People Involved */}
              <div className="mb-4">
                <label className="block text-sm sm:text-base font-medium mb-2">Estimated People Affected</label>
                <input
                  type="number"
                  value={formData.peopleInvolved}
                  onChange={(e) => setFormData({ ...formData, peopleInvolved: e.target.value })}
                  className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm sm:text-base"
                  min="1"
                />
              </div>

              {/* Location */}
              <div className="mb-4">
                <label className="block text-sm sm:text-base font-medium mb-2">Location</label>
                <input
                  type="text"
                  placeholder="City, Country"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm sm:text-base"
                />
              </div>

              {/* Severity Slider */}
              <div className="mb-6">
                <label className="block text-sm sm:text-base font-medium mb-2">Severity: {formData.severityLevel}/10</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.severityLevel}
                  onChange={(e) => setFormData({ ...formData, severityLevel: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-sm sm:text-base font-medium mb-2">Situation Description</label>
                <textarea
                  placeholder="Describe the disaster scenario in detail..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm sm:text-base h-20 resize-none"
                />
              </div>

              <Button
                onClick={analyzeDisasterScenario}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-bold"
                size="lg"
              >
                Analyze Situation
              </Button>
            </Card>
          </div>

          {/* Analysis Results */}
          {showResults && analysis && (
            <div className="md:col-span-2 space-y-4 sm:space-y-6">
              {/* Header Card */}
              <Card className={`bg-card border-2 p-4 sm:p-6 ${analysis.riskLevel === 'Critical' ? 'border-accent neon-glow-pink' : 'border-primary neon-glow'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold">{analysis.disasterType}</h2>
                    <p className="text-muted-foreground text-sm sm:text-base">{formData.location || 'Location TBD'}</p>
                  </div>
                  <div className={`px-3 py-1 rounded font-bold text-sm sm:text-base ${analysis.riskBadgeColor}`}>{analysis.riskLevel}</div>
                </div>
                <p className="text-sm sm:text-base">
                  <span className="text-primary font-semibold">Estimated People Affected:</span> {analysis.peopleAffected}
                </p>
              </Card>

              {/* Immediate Actions */}
              <Card className="bg-card border-border p-4 sm:p-6 neon-glow">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <h3 className="font-bold text-lg sm:text-xl">Immediate Actions (First 5 Minutes)</h3>
                </div>
                <ol className="space-y-2 text-sm sm:text-base">
                  {analysis.immediateActions.map((action: string, i: number) => (
                    <li key={i} className="flex gap-3 text-accent">
                      <span className="font-bold flex-shrink-0">{i + 1}.</span>
                      <span className="text-foreground">{action}</span>
                    </li>
                  ))}
                </ol>
              </Card>

              {/* Follow-up Actions */}
              <Card className="bg-card border-border p-4 sm:p-6 neon-glow">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                  <h3 className="font-bold text-lg sm:text-xl">Follow-Up Actions (First 30 Minutes)</h3>
                </div>
                <ol className="space-y-2 text-sm sm:text-base">
                  {analysis.followUpActions.map((action: string, i: number) => (
                    <li key={i} className="flex gap-3 text-secondary">
                      <span className="font-bold flex-shrink-0">{i + 1}.</span>
                      <span className="text-foreground">{action}</span>
                    </li>
                  ))}
                </ol>
              </Card>

              {/* Safety Precautions */}
              <Card className="bg-card border-border p-4 sm:p-6 neon-glow">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="font-bold text-lg sm:text-xl">Safety Precautions</h3>
                </div>
                <ul className="space-y-2 text-sm sm:text-base">
                  {analysis.safetyPrecautions.map((precaution: string, i: number) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>{precaution}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Resource Recommendations */}
              <Card className="bg-card border-border p-4 sm:p-6 neon-glow">
                <h3 className="font-bold mb-4">Resource Recommendations</h3>
                <ul className="space-y-2 text-sm sm:text-base">
                  {analysis.resources.map((resource: string, i: number) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-secondary">✓</span>
                      <span>{resource}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Critical Warnings */}
              <Card className={`bg-card border-2 p-4 sm:p-6 ${analysis.riskLevel === 'Critical' ? 'border-accent neon-glow-pink' : 'border-secondary neon-glow-green'}`}>
                <div className="flex items-start gap-3">
                  <AlertTriangle className={`w-5 h-5 flex-shrink-0 ${analysis.riskLevel === 'Critical' ? 'text-accent' : 'text-secondary'}`} />
                  <div>
                    <h3 className="font-bold mb-2">Critical Warnings & Alerts</h3>
                    <ul className="space-y-1 text-sm sm:text-base">
                      {analysis.warnings.map((warning: string, i: number) => (
                        <li key={i}>• {warning}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Copy Safety Plan Button */}
              <Button
                onClick={copyToClipboard}
                variant="outline"
                className="w-full border-border hover:border-primary hover:text-primary"
                size="lg"
              >
                Copy Safety Plan
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
