import { cn } from '@/lib/utils'

interface PitchCardProps {
  name: string
  size: string
  className?: string
  onClick?: () => void
}

export default function PitchCard({ name, size, className, onClick }: PitchCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-green-500 rounded-lg p-4 text-white cursor-pointer hover:bg-green-600 transition-colors',
        className
      )}
    >
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm opacity-90">{size}</p>
    </div>
  )
} 