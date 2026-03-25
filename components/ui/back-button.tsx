import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface BackButtonProps {
  href?: string
  label?: string
}

export function BackButton({ href = '/', label = 'Back' }: BackButtonProps) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition">
      <ArrowLeft className="w-4 h-4" />
      <span className="hidden sm:inline">{label}</span>
    </Link>
  )
}
