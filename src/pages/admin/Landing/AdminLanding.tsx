import { lazy, Suspense, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { CircularProgress, useMediaQuery, useTheme } from '@mui/material'
import { AdminSideMenu } from 'src/components/admin/sideMenu/AdminSideMenu'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminUrls } from 'src/constants/routes.constant'

// lazy imports
const ThemePage = lazy(() => import('../Configuration/Theme'))
const GeneralPage = lazy(() => import('../Configuration/General'))

const drawerWidth = 240
export const AdminLanding = () => {
  const theme = useTheme()

  const isXs = useMediaQuery(theme.breakpoints.down('sm'))
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleDrawerClose = () => {
    setIsClosing(true)
    setMobileOpen(false)
  }

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false)
  }

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen)
    }
  }

  return (
    <Box sx={{ display: 'flex', paddingTop: '64px', height: '100%' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          height: '100%',
          borderRight: { sm: 1 },
          borderColor: { sm: 'grey.300' },
        }}
        aria-label="admin menu"
      >
        {isXs ? (
          <Drawer
            variant={'temporary'}
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            <AdminSideMenu />
          </Drawer>
        ) : (
          <Box>
            <AdminSideMenu />
          </Box>
        )}
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 5,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: '100%',
          overflowY: 'auto',
        }}
      >
        <Suspense
          fallback={
            <Box
              width="100%"
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CircularProgress />
            </Box>
          }
        >
          <Routes>
            <Route path={AdminUrls.DASHBOARD_PAGE} element="Dashboard" />
            <Route path={AdminUrls.THEME_PAGE} element={<ThemePage />} />
            <Route path={AdminUrls.GENERAL_PAGE} element={<GeneralPage />} />
            <Route path={AdminUrls.HOME_PAGE} element="Home" />
            <Route
              path="/*"
              element={<Navigate to={AdminUrls.DASHBOARD_PAGE} />}
            />
          </Routes>
        </Suspense>
      </Box>
    </Box>
  )
}
