import React, { useMemo } from 'react'
import { IFooter } from 'src/interfaces/components/footer.interface'

interface FooterProps {
  footerProps: IFooter | null
}

export const Footer: React.FC<FooterProps> = ({ footerProps }) => {
  const FooterComponent: any = useMemo(() => {
    switch (footerProps?.name) {
      case 'watchFooter': {
        return React.lazy(() =>
          import('./footer1').then((module) => ({ default: module.Footer1 }))
        )
      }
      default:
        return <></>
    }
  }, [footerProps])

  return (
    <React.Suspense fallback={'...'}>
      <FooterComponent {...footerProps} />
    </React.Suspense>
  )
}
