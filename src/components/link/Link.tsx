import { Button } from '@mui/material'
import { Link as NavLink } from 'react-router-dom'

interface LinkProps {
  children: React.ReactNode
  to: string
}

export const Link: React.FC<LinkProps> = ({ children, to }) => {
  return (
    <NavLink to={to}>
      <Button variant="text">{children}</Button>
    </NavLink>
  )
}
