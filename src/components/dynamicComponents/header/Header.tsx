import React, { useMemo } from 'react'
import { IHeader } from 'src/interfaces/components/header.interface'

interface HeaderProps {
  headerProps: IHeader | null
}

export const Header: React.FC<HeaderProps> = ({ headerProps }) => {
  const HeaderComponent: any = useMemo(() => {
    switch (headerProps?.name) {
      case 'watchHeader':
        return React.lazy(() =>
          import('./Watch').then((module) => ({ default: module.WatchHeader }))
        )
      default:
        return <></>
    }
  }, [headerProps])

  if (!headerProps) {
    return null
  }

  return (
    <React.Suspense fallback={'...'}>
      <HeaderComponent {...headerProps} />
    </React.Suspense>
  )
}
