import { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { AdminGuard } from 'src/components/generic/Guard/AdminGuard'
import { AdminUrls } from 'src/constants/routes.constant'
import { AdminLanding } from 'src/pages/admin/Landing'
import { AdminLogin } from 'src/pages/admin/Login'

export const AdminRoutes = () => {
  return (
    <Fragment key="admin_routes">
      <Route
        path={AdminUrls.LOGIN_PAGE}
        element={
          <AdminGuard>
            <AdminLogin />
          </AdminGuard>
        }
      />
      <Route
        path="/admin/*"
        element={
          <AdminGuard>
            <AdminLanding />
          </AdminGuard>
        }
      />
    </Fragment>
  )
}
