import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { WatchHeader } from 'src/components/header'
import { Footer1 } from 'src/components/footer'
import { mockFooter } from 'src/mock/footer'

export const BusinessLayout: React.FC = () => {
  return (
    <Box height="100%" sx={{ overflowX: 'hidden' }}>
      <WatchHeader logo="https://logodownload.org/wp-content/uploads/2017/05/rolex-logo-9.png" />
      <Outlet />
      <Footer1 {...mockFooter} />
    </Box>
  )
}
