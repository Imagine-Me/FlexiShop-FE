import * as React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import { adminSideMenuConstant } from 'src/constants/adminSideMenu.constant'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Divider, styled } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  '&.active': {
    '.MuiListItemIcon-root': {
      color: theme.palette.primary.contrastText,
    },
    '.MuiListItemText-root': {
      color: theme.palette.primary.contrastText,
    },
    backgroundColor: theme.palette.primary.main,
  },
  '&:hover': {
    '.MuiListItemIcon-root': {
      color: theme.palette.primary.contrastText,
    },
    '.MuiListItemText-root': {
      color: theme.palette.primary.contrastText,
    },
    backgroundColor: theme.palette.primary.main,
  },
  '.MuiListItemIcon-root': {
    minWidth: '30px',
  },
}))

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
        return (
          <React.Fragment key={item.title}>
            <Link
              to={item.path ?? '#'}
              style={{ textDecoration: 'none', color: 'unset' }}
            >
              <StyledListItemButton
                onClick={() => handleClick(item.title)}
                className={
                  pathname.replace(/\/$/, '') === `/admin/${item.path}`
                    ? 'active'
                    : ''
                }
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
              </StyledListItemButton>
            </Link>
            {item.hasSubMenu &&
              item.subMenu!.map((subMenu) => {
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
                        <StyledListItemButton
                          sx={{ pl: 6 }}
                          className={
                            pathname.replace(/\/$/, '') ===
                            `/admin/${subMenu.path}`
                              ? 'active'
                              : ''
                          }
                        >
                          <ListItemIcon></ListItemIcon>
                          <ListItemText primary={subMenu.title} />
                        </StyledListItemButton>
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
