import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { BusinessRoutes } from './businessRoutes'
import { AdminRoutes } from './adminRoutes'

export const AppRouter: React.FC = () => {
  const pageRoutes = [BusinessRoutes(), AdminRoutes()]
  return (
    <>
      <BrowserRouter>
        <Routes>
          <React.Fragment>{pageRoutes?.map((item) => item)}</React.Fragment>
        </Routes>
      </BrowserRouter>
    </>
  )
}
