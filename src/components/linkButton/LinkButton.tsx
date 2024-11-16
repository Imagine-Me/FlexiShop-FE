import { Button } from '@mui/material'
import { Link as NavLink } from 'react-router-dom'

import classes from './Link.module.css'

interface LinkProps {
  children: React.ReactNode
  to: string
}

export const LinkButton: React.FC<LinkProps> = ({ children, to }) => {
  return (
    <NavLink to={to}>
      <Button variant="text" className={classes.linkButton} size="medium">
        {children}
      </Button>
    </NavLink>
  )
}
