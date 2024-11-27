import BuildRoundedIcon from '@mui/icons-material/BuildRounded'
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import LayersIcon from '@mui/icons-material/Layers'
import InventoryIcon from '@mui/icons-material/Inventory'
import { IAdminSideMenuConstant } from 'src/interfaces/admin.interface'
import { AdminUrls } from './routes.constant'

export const adminSideMenuConstant: IAdminSideMenuConstant[] = [
  {
    title: 'Dashboard',
    icon: SpaceDashboardRoundedIcon,
    hasSubMenu: false,
    path: AdminUrls.DASHBOARD_PAGE,
  },
  {
    title: 'Inventory',
    icon: InventoryIcon,
    hasSubMenu: true,
    path: AdminUrls.INVENTORY_PAGE,
    subMenu: [
      { title: 'Products', path: AdminUrls.PRODUCT_PAGE },
      { title: 'Orders', path: AdminUrls.ORDER_PAGE },
    ],
  },
  {
    title: 'Users',
    icon: AccountCircleRoundedIcon,
    hasSubMenu: true,
    subMenu: [
      {
        title: 'All users',
        path: '',
      },
      {
        title: 'Orders',
        path: '',
      },
    ],
  },
  {
    title: 'Configuration',
    icon: BuildRoundedIcon,
    hasSubMenu: true,
    path: AdminUrls.CONFIGURATION_URL,
    subMenu: [
      {
        title: 'Template',
        path: AdminUrls.TEMPLATE_PAGE,
      },
      {
        title: 'General',
        path: AdminUrls.GENERAL_PAGE,
      },
      {
        title: 'Header',
        path: AdminUrls.HEADER_PAGE,
      },
      {
        title: 'Footer',
        path: AdminUrls.FOOTER_PAGE,
      },
      {
        title: 'Theme',
        path: AdminUrls.THEME_PAGE,
      },
    ],
  },
  {
    title: 'Pages',
    icon: LayersIcon,
    hasSubMenu: true,
    path: AdminUrls.PAGE_URL,
    subMenu: [
      {
        title: 'Home',
        path: AdminUrls.HOME_PAGE,
        subPath: [AdminUrls.HOME_PAGE_EDIT],
      },
    ],
  },
]
