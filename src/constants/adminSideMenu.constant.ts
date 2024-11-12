import BuildRoundedIcon from '@mui/icons-material/BuildRounded'
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
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
    subMenu: [
      {
        title: 'General',
        path: AdminUrls.GENERAL_PAGE,
      },
      {
        title: 'Theme',
        path: AdminUrls.THEME_PAGE,
      },
      {
        title: 'Home Page',
        path: AdminUrls.HOME_PAGE,
      },
    ],
  },
]
