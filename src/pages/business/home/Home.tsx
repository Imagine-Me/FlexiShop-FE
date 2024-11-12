import React from 'react'
import { FullSizeBanner } from 'src/components/home/fullSizeBanner/FullSizeBanner'
import { mockFullBannerData } from 'src/mock/fullSizeBanner'

export const Home: React.FC = () => {
  return <>
    <FullSizeBanner props={mockFullBannerData} />
  </>
}
