import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { WatchHeader } from 'src/components/header'

export const BusinessLayout: React.FC = () => {
  return (
    <Box height="100%">
      <WatchHeader
      />
      <Outlet />
    </Box>
  )
}
