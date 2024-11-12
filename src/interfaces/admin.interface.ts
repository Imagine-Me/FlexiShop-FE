export interface IAdminSideMenuConstant {
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>
  hasSubMenu: boolean
  path?: string
  subMenu?: {
    title: string
    path: string
  }[]
}
