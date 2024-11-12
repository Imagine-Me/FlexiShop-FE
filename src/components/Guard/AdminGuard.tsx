import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AdminUrls } from 'src/constants/routes.constant'
import { useUserStore } from 'src/store/authentication.store'

type AdminGuardProps = {
  children: React.ReactNode
}

export const AdminGuard: React.FC<AdminGuardProps> = ({ children }) => {
  const { data } = useUserStore()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  useEffect(() => {
    if (!data || (data && data.user.role !== 'admin')) {
      navigate(AdminUrls.LOGIN_PAGE)
    } else if (pathname.replace(/\/$/, '') === AdminUrls.LOGIN_PAGE) {
      navigate(AdminUrls.ADMIN_REROUTE_PAGE)
    }
  }, [data, pathname, navigate])
  return <>{children}</>
}
