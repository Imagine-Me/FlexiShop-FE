export interface IAdminSideMenuConstant {
  title: string
  icon: React.ComponentType<any>
  hasSubMenu: boolean
  path?: string
  subMenu?: {
    title: string
    path: string
    subPath?: string[]
  }[]
}
