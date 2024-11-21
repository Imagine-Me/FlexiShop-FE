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
import { useCallback } from 'react'

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

  const isPathMatching = useCallback(
    (path: string, subPaths: string[] = []) => {
      const createRegexp = (subPath: string) =>
        new RegExp(
          '^' +
            subPath
              .replace(/:[^/]+/g, '[^/]+') // Replace dynamic segments (e.g., :any) with regex
              .replace(/\//g, '\\/') + // Escape forward slashes
            '$'
        )
      const allPaths = [path, ...subPaths.map((value) => `${path}/${value}`)]
      return allPaths.some((path) => createRegexp(path).test(pathname))
    },
    [pathname]
  )

  // set initial active menu in open
  React.useEffect(() => {
    for (const menu of adminSideMenuConstant) {
      if (menu.hasSubMenu) {
        for (const menuItem of menu.subMenu!) {
          const condition = isPathMatching(
            `/admin/${menuItem.path}`,
            menuItem.subPath
          )
          if (condition) {
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
        const activeClass = isPathMatching(`/admin/${item.path}`)
          ? classes.active
          : ''
        return (
          <React.Fragment key={item.title}>
            <Link
              to={item.hasSubMenu ? '#' : (item.path ?? '')}
              style={{ textDecoration: 'none', color: 'unset' }}
            >
              <ListItemButton
                onClick={() => handleClick(item.title)}
                className={`${classes.listButton} ${activeClass} ${item.subMenu ? classes.collapseMenu : ''}`}
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
                const condition = isPathMatching(
                  `/admin/${subMenu.path}`,
                  subMenu.subPath
                )
                const activeClass = condition ? classes.active : ''
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
