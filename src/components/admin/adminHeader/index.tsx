import React, { useMemo } from 'react'
import { IHeader } from 'src/interfaces/components/header.interface'
import { WatchHeader } from 'src/components/dynamicComponents/header/Watch'

interface HeaderProps {
  headerProps: IHeader | null
}

export const HeaderPreview: React.FC<HeaderProps> = ({ headerProps }) => {
  const HeaderComponent: any = useMemo(() => {
    switch (headerProps?.name) {
      case 'watchHeader':
        return <WatchHeader {...headerProps} />
      default:
        return <></>
    }
  }, [headerProps])

  if (!headerProps) {
    return null
  }

  return <React.Suspense fallback={'...'}>{HeaderComponent}</React.Suspense>
}
