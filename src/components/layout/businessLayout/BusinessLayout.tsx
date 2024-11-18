import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { Header } from 'src/components/dynamicComponents/header'
import { Footer1 } from 'src/components/dynamicComponents/footer'
import { mockFooter } from 'src/mock/footer'
import { useTemplateStore } from 'src/store/template.store'

export const BusinessLayout: React.FC = () => {
  const [headerProps] = useTemplateStore((state) => [state.header])

  return (
    <Box height="100%" sx={{ overflowX: 'hidden' }}>
      <Header headerProps={headerProps} />
      <Outlet />
      <Footer1 {...mockFooter} />
    </Box>
  )
}
