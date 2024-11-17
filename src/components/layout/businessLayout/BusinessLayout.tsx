import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { Header } from 'src/components/header'
import { Footer1 } from 'src/components/footer'
import { mockFooter } from 'src/mock/footer'

export const BusinessLayout: React.FC = () => {
  return (
    <Box height="100%" sx={{ overflowX: 'hidden' }}>
      <Header />
      <Outlet />
      <Footer1 {...mockFooter} />
    </Box>
  )
}
