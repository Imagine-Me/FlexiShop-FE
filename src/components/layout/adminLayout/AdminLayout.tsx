import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'

export const AdminLayout: React.FC = () => {
  return (
    <div>
      <Box>
        <Container disableGutters maxWidth="xl">
          <Outlet />
        </Container>
      </Box>
    </div>
  )
}
