import BuildRoundedIcon from '@mui/icons-material/BuildRounded'
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import LayersIcon from '@mui/icons-material/Layers'
import InventoryIcon from '@mui/icons-material/Inventory'
import { IAdminSideMenuConstant } from 'src/interfaces/admin.interface'
import {
  adminConfigurationUrls,
  adminInventoryUrls,
  adminPagesUrls,
  AdminUrls,
} from './routes.constant'

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
      {
        title: 'Products',
        path: adminInventoryUrls.product.main,
        subPath: [
          adminInventoryUrls.product.create,
          adminInventoryUrls.product.edit,
        ],
      },
      { title: 'Orders', path: adminInventoryUrls.order.main },
      {
        title: 'Brands',
        path: adminInventoryUrls.brand.main,
        subPath: [
          adminInventoryUrls.brand.create,
          adminInventoryUrls.brand.edit,
        ],
      },
      {
        title: 'Categories',
        path: adminInventoryUrls.category.main,
        subPath: [
          adminInventoryUrls.category.create,
          adminInventoryUrls.category.edit,
        ],
      },
      {
        title: 'Tags',
        path: adminInventoryUrls.tags.main,
        subPath: [adminInventoryUrls.tags.create, adminInventoryUrls.tags.edit],
      },
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
        path: adminConfigurationUrls.template.main,
      },
      {
        title: 'General',
        path: adminConfigurationUrls.general.main,
      },
      {
        title: 'Header',
        path: adminConfigurationUrls.header.main,
      },
      {
        title: 'Footer',
        path: adminConfigurationUrls.footer.main,
      },
      {
        title: 'Theme',
        path: adminConfigurationUrls.theme.main,
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
        path: adminPagesUrls.home.main,
        subPath: [adminPagesUrls.home.edit],
      },
    ],
  },
]
