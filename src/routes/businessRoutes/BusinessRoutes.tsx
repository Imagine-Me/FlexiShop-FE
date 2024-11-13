import { Fragment } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { Home } from 'src/pages/business'
import { BusinessLayout } from 'src/components/layout/businessLayout'

export const BusinessRoutes = () => {
  return (
    <Fragment key="business_route">
      <Route path="/" element={<BusinessLayout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="product" element={<Home />} />
        <Route path="product/:id" element={<Home />} />
      </Route>
    </Fragment>
  )
}
