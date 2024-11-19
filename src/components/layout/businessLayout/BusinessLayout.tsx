import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { Header } from 'src/components/dynamicComponents/header'
import { useTemplateStore } from 'src/store/template.store'
import { Footer } from 'src/components/dynamicComponents/footer'

export const BusinessLayout: React.FC = () => {
  const [headerProps, footerProps] = useTemplateStore((state) => [
    state.header,
    state.footer,
  ])

  return (
    <Box height="100%" sx={{ overflowX: 'hidden' }}>
      <Header headerProps={headerProps} />
      <Outlet />
      <Footer footerProps={footerProps} />
    </Box>
  )
}
