import Link from 'next/link'

interface DashboardCardProps {
  title: string
  description: string
  icon: string
  href?: string
}

export default function DashboardCard({
  title,
  description,
  icon,
  href,
}: DashboardCardProps) {
  const CardContent = () => (
    <>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </>
  )

  if (href) {
    return (
      <Link href={href}>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
          <CardContent />
        </div>
      </Link>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <CardContent />
    </div>
  )
} 