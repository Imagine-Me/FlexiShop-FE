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
import {
  adminConfigurationUrls,
  adminInventoryUrls,
  adminPagesUrls,
  AdminUrls,
} from 'src/constants/routes.constant'

// lazy imports
const ThemePage = lazy(() => import('../Configuration/Theme'))
const GeneralPage = lazy(() => import('../Configuration/General'))
const HeaderPage = lazy(() => import('../Configuration/Header'))
const FooterPage = lazy(() => import('../Configuration/Footer'))
const HomePage = lazy(() => import('../Pages/home'))
const ComponentPage = lazy(() =>
  import('../Pages/home/component').then((module) => ({
    default: module.ComponentPage,
  }))
)
const EditComponentPage = lazy(() =>
  import('../Pages/home/editComponent').then((module) => ({
    default: module.EditComponent,
  }))
)
const ProductPage = lazy(() => import('../Inventory/Product'))
const AllProductPage = lazy(() =>
  import('../Inventory/Product/AllProducts').then((module) => ({
    default: module.AllProducts,
  }))
)
const CreateProductPage = lazy(() =>
  import('../Inventory/Product/CreateProduct').then((module) => ({
    default: module.CreateProduct,
  }))
)

const BrandPage = lazy(() => import('../Inventory/Brand'))
const AllBrandPage = lazy(() =>
  import('../Inventory/Brand/AllBrands').then((module) => ({
    default: module.AllBrand,
  }))
)
const CreateBrandPage = lazy(() =>
  import('../Inventory/Brand/CreateBrand').then((module) => ({
    default: module.CreateBrand,
  }))
)

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
            <Route path={AdminUrls.DASHBOARD_PAGE} element={'Dashboard'} />

            {/* ---------------------------- CONFIGURATION URLS --------------------------------- */}
            <Route
              path={adminConfigurationUrls.theme.main}
              element={<ThemePage />}
            />
            <Route
              path={adminConfigurationUrls.general.main}
              element={<GeneralPage />}
            />
            <Route
              path={adminConfigurationUrls.header.main}
              element={<HeaderPage />}
            />
            <Route
              path={adminConfigurationUrls.footer.main}
              element={<FooterPage />}
            />

            {/* ---------------------------- INVENTORY URLS --------------------------------- */}
            {/* Product URLS */}
            <Route
              path={adminInventoryUrls.product.main}
              element={<ProductPage />}
            >
              <Route
                path={adminInventoryUrls.product.create}
                element={<CreateProductPage />}
              />
              <Route
                path={adminInventoryUrls.product.edit}
                element={<CreateProductPage />}
              />
              <Route path="" element={<AllProductPage />} />
            </Route>

            {/* Brand URLS */}
            <Route path={adminInventoryUrls.brand.main} element={<BrandPage />}>
              <Route
                path={adminInventoryUrls.brand.create}
                element={<CreateBrandPage />}
              />
              <Route
                path={adminInventoryUrls.brand.edit}
                element={<CreateBrandPage />}
              />
              <Route path="" element={<AllBrandPage />} />
            </Route>

            {/* ---------------- PAGES URLS----------------------------*/}
            <Route path={adminPagesUrls.home.main} element={<HomePage />}>
              <Route
                path={adminPagesUrls.home.edit}
                element={<EditComponentPage />}
              />
              <Route path="" element={<ComponentPage />} />
            </Route>
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
