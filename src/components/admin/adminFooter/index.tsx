import React, { useMemo } from 'react'
import { Footer1 } from 'src/components/dynamicComponents/footer/footer1'
import { IFooter } from 'src/interfaces/components/footer.interface'

interface HeaderProps {
  footerProps: IFooter | null
}

export const FooterPreview: React.FC<HeaderProps> = ({ footerProps }) => {
  const FooterComponent: any = useMemo(() => {
    switch (footerProps?.name) {
      case 'watchFooter':
        return <Footer1 {...footerProps} />
      default:
        return <></>
    }
  }, [footerProps])

  if (!footerProps) {
    return null
  }

  return <React.Suspense fallback={'...'}>{FooterComponent}</React.Suspense>
}
