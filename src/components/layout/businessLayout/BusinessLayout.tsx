import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { ConfigurableHeader } from 'src/components/header/configurableHeader'

export const BusinessLayout: React.FC = () => {
  return (
    <Box height="100%">
      <ConfigurableHeader
        headerIcon={AddShoppingCartIcon}
        headerName="Sample"
        onMenuClick={() => {}}
        onProfileClick={() => {}}
        onCartClick={() => {}}
      />
      <Outlet />
    </Box>
  )
}
