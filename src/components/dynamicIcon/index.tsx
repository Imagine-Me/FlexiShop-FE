import { Suspense } from 'react'
import { loadIcon } from 'src/utils/icon.utils'

interface DynamicIconProps {
  iconName: { name: string; type: string }
  size?: number
  className?: string
}

export default function DynamicIcon({
  iconName,
  size = 24,
  className = '',
}: DynamicIconProps) {
  const IconComponent: any = loadIcon(iconName)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IconComponent size={size} className={className} />
    </Suspense>
  )
}
