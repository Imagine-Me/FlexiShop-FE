import * as React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import { adminSideMenuConstant } from 'src/constants/adminSideMenu.constant'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Divider } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

import classes from './AdminSideMenu.module.css'

export const AdminSideMenu = () => {
  const [open, setOpen] = React.useState<string[]>([])
  const { pathname } = useLocation()

  const handleClick = (value: string) => {
    if (open.includes(value)) {
      setOpen(open.filter((openItem) => openItem !== value))
    } else {
      setOpen([...open, value])
    }
  }

  // set initial active menu in open
  React.useEffect(() => {
    for (const menu of adminSideMenuConstant) {
      if (menu.hasSubMenu) {
        for (const menuItem of menu.subMenu!) {
          if (pathname.replace(/\/$/, '') === `/admin/${menuItem.path}`) {
            setOpen([menu.title])
            break
          }
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-labelledby="nested-list-subheader"
    >
      {adminSideMenuConstant.map((item) => {
        const activeClass = pathname.includes(`/admin/${item.path}`)
          ? classes.active
          : ''
        return (
          <React.Fragment key={item.title}>
            <Link
              to={item.path ?? '#'}
              style={{ textDecoration: 'none', color: 'unset' }}
            >
              <ListItemButton
                onClick={() => handleClick(item.title)}
                className={`${classes.listButton} ${activeClass}`}
              >
                <ListItemIcon>{<item.icon />}</ListItemIcon>
                <ListItemText primary={item.title} />
                {item.hasSubMenu ? (
                  open.includes(item.title) ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null}
              </ListItemButton>
            </Link>
            {item.hasSubMenu &&
              item.subMenu!.map((subMenu) => {
                const activeClass =
                  pathname.replace(/\/$/, '') === `/admin/${subMenu.path}`
                    ? classes.active
                    : ''
                return (
                  <Collapse
                    in={open.includes(item.title)}
                    key={subMenu.title}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Link
                      to={subMenu.path ?? '#'}
                      style={{ textDecoration: 'none', color: 'unset' }}
                    >
                      <List component="div" disablePadding>
                        <ListItemButton
                          className={`${classes.listButton} ${activeClass}`}
                        >
                          <ListItemIcon></ListItemIcon>
                          <ListItemText primary={subMenu.title} />
                        </ListItemButton>
                      </List>
                    </Link>
                  </Collapse>
                )
              })}
            <Divider variant="middle" />
          </React.Fragment>
        )
      })}
    </List>
  )
}
