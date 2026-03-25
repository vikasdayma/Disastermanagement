import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Zap, AlertTriangle, BarChart3, Globe2 } from 'lucide-react'
import { BackButton } from '@/components/ui/back-button'
import Hero from  '@/components/Hero'
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border overflow-x-auto">
        <div className="text-lg sm:text-xl font-bold glitch-text whitespace-nowrap">AlertHive</div>
        <div className="hidden md:flex gap-4 sm:gap-8 text-xs sm:text-sm">
          <Link href="#features" className="hover:text-primary transition">Features</Link>
          <Link href="#how-it-works" className="hover:text-primary transition">How It Works</Link>
          <Link href="/dashboard" className="text-primary">Dashboard</Link>
        </div>
        <Link href="/dashboard" className="md:hidden text-primary text-xs sm:text-sm">Dashboard</Link>
      </nav>

      {/* Hero Section */}
      {/* <section className="relative px-6 py-20 md:py-32 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Real-Time <span className="text-primary">Disaster</span> Monitoring for India
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Monitor monsoons, floods, earthquakes, and cyclones across India with real-time data aggregation from Indian news outlets, government agencies, and social media sources.
              </p>
              <Link href="/dashboard">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow">
                  Start Monitoring <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-primary/30 neon-border flex items-center justify-center">
              <div className="text-center">
                <Globe2 className="w-24 h-24 mx-auto mb-4 text-primary opacity-50" />
                <p className="text-muted-foreground">Live India Disaster Monitoring Map</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Hero/>

      {/* Quick Stats */}
      {/* <section className="px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border p-6 neon-glow">
              <div className="text-primary font-mono text-sm mb-2">DISASTERS TRACKED (430)</div>
              <div className="text-4xl font-bold text-primary">12,847</div>
              <p className="text-muted-foreground text-sm mt-2">Events in last 30 years across India</p>
            </Card>
            <Card className="bg-card border-border p-6 neon-glow">
              <div className="text-primary font-mono text-sm mb-2">DATA SOURCES</div>
              <div className="text-4xl font-bold text-primary">18</div>
              <p className="text-muted-foreground text-sm mt-2">Indian agencies, news, & social media</p>
            </Card>
             <Card className="bg-card border-border p-6 neon-glow">
              <div className="text-primary font-mono text-sm mb-2">COVERED REGION</div>
              <div className="text-4xl font-bold text-primary">36</div>
              <p className="text-muted-foreground text-sm mt-2">Indian states and territories</p>
            </Card>
          
          </div>
        </div>
      </section> */}

<section className="px-6 py-16 border-b border-[#1f252b] bg-black">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-3 gap-6">

      {/* DISASTERS TRACKED */}
      <Card className="bg-[#0d1114] border border-[#45f3ff]/20 p-6 rounded-2xl hadow-[0_0_25px_-5px_#45f3ff]">
        <div className="text-[#45f3ff] font-mono text-sm mb-2 tracking-wider">
          DISASTERS TRACKED (430)
        </div>
        <div className="text-4xl font-bold text-[#45f3ff]">12,847</div>
        <p className="text-gray-400 text-sm mt-2">
          Events in the last 30 years across India
        </p>
      </Card>

      {/* DATA SOURCES */}
      <Card className="bg-[#0d1114] border border-[#45f3ff]/20 p-6 rounded-2xl hadow-[0_0_25px_-5px_#45f3ff]">
        <div className="text-[#45f3ff] font-mono text-sm mb-2 tracking-wider">
          DATA SOURCES
        </div>
        <div className="text-4xl font-bold text-[#45f3ff]">18</div>
        <p className="text-gray-400 text-sm mt-2">
          Government agencies, satellite feeds, news & social media
        </p>
      </Card>

      {/* REGIONS COVERED */}
      <Card className="bg-[#0d1114] border border-[#45f3ff]/20 p-6 rounded-2xl ]">
        <div className="text-[#45f3ff] font-mono text-sm mb-2 tracking-wider">
          COVERED REGIONS
        </div>
        <div className="text-4xl font-bold text-[#45f3ff]">36</div>
        <p className="text-gray-400 text-sm mt-2">
          Indian states & union territories
        </p>
      </Card>

    </div>
  </div>
</section>

      {/* How It Works */}
      {/* <section id="how-it-works" className="px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: AlertTriangle, title: "Collect", desc: "Real-time data from India's disaster agencies" },
              { icon: Zap, title: "Process", desc: "Instant processing of monsoon and cyclone data" },
              { icon: BarChart3, title: "Analyze", desc: "Detect patterns in regional disasters" },
              { icon: Globe2, title: "Alert", desc: "Immediate notifications across India" }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 neon-border">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section
  id="how-it-works"
  className="px-6 py-20 border-b border-[#1f252b] bg-black"
>
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold mb-12 text-center text-white">
      How AlertHive Works
    </h2>

    <div className="grid md:grid-cols-4 gap-10">

      {[
        {
          icon: AlertTriangle,
          title: "Collect",
          desc: "Real-time feeds from Indian disaster agencies, IMD, NDRF & satellite data.",
        },
        {
          icon: Zap,
          title: "Process",
          desc: "High-speed processing of flood, monsoon, earthquake & cyclone signals.",
        },
        {
          icon: BarChart3,
          title: "Analyze",
          desc: "AI-driven analysis to detect patterns, severity & regional impact.",
        },
        {
          icon: Globe2,
          title: "Alert",
          desc: "Instant alerts across India for high-risk disaster zones.",
        },
      ].map((step, i) => (
        <div
          key={i}
          className="text-center px-4"
        >
          {/* ICON CONTAINER */}
          <div
            className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center
                       bg-[#0d1114] border border-[#45f3ff]/30 
                       shado-[0_0_20px_-4px_#45f3ff] backdrop-blur"
          >
            <step.icon className="w-10 h-10 text-[#45f3ff]" />
          </div>

          {/* TITLE */}
          <h3 className="text-lg font-semibold text-white tracking-wide">
            {step.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            {step.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>


      {/* Features Preview */}
      {/* <section id="features" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Real-time monitoring across 36 Indian states and territories",
              "Multi-source data aggregation from Indian news and government agencies",
              "Advanced monsoon, flood, and cyclone tracking analytics",
              "Customizable alert system for critical weather events",
              "Interactive mapping of disaster-prone regions in India",
              "Comprehensive disaster impact and recovery reporting"
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
<section
  id="features"
  className="px-6 py-20 bg-black border-b border-[#1f252b]"
>
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold mb-12 text-center text-white">
      Key Features of AlertHive
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {[
        "Real-time monitoring across 36 Indian states and union territories",
        "Multi-source aggregation from IMD, NDRF, satellite feeds, and national news outlets",
        "Advanced analytics for monsoon patterns, flood risk, earthquakes & cyclones",
        "Customizable early-warning alerts for high-risk weather and seismic events",
        "Interactive neon map of India showing active disaster zones",
        "Full impact analysis including damage, recovery progress & response metrics",
      ].map((feature, i) => (
        <div
          key={i}
          className="flex gap-4 p-4 rounded-2xl bg-[#0d1114]/70 border border-[#45f3ff]/20 
                     shado-[0_0_20px_-6px_#45f3ff] transition-all"
        >
          {/* Neon Bullet */}
          <div className="w-3 h-3 bg-[#45f3ff] rounded-full mt-2 shadow-[0_0_10px_#45f3ff]" />

          <p className="text-gray-300 leading-relaxed">{feature}</p>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-muted-foreground text-sm">
            AlertHive © 2025 | Real-Time Disaster Information Aggregation System
          </div>
          <div className="text-xs text-muted-foreground font-mono">
            Status: <span className="text-secondary">Monitoring 36 States</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
