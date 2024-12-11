import { Route, Navigate } from 'react-router-dom'
import { Home, ProductSearch } from 'src/pages/business'
import { BusinessLayout } from 'src/components/layout/businessLayout'
import { ProductPage } from 'src/pages/business/product'
import React from 'react'

export const BusinessRoutes = () => {
  return (
    <React.Fragment key="business_route">
      <Route path="/" element={<BusinessLayout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="product" element={<ProductSearch />} />
        <Route path="product/:productId" element={<ProductPage />} />
      </Route>
    </React.Fragment>
  )
}
