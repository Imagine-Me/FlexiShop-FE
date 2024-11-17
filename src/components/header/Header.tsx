import React, { useMemo } from 'react'
import { useTemplateStore } from 'src/store/template.store'

export const Header: React.FC = () => {
  const [headerProps] = useTemplateStore((state) => [state.header])
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
