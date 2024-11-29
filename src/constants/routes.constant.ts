export enum AdminUrls {
  LOGIN_PAGE = '/admin/login',
  ADMIN_REROUTE_PAGE = '/admin/dashboard',
  DASHBOARD_PAGE = 'dashboard',
  INVENTORY_PAGE = 'inventory',
  CONFIGURATION_URL = 'configuration',
  PAGE_URL = 'pages',
}

export const adminInventoryUrls = {
  product: {
    main: 'inventory/product',
    create: 'create',
    edit: 'edit/:productId',
  },
  brand: {
    main: 'inventory/brand',
    create: 'create',
    edit: 'edit/:brandId',
  },
  order: {
    main: 'inventory/orders',
  },
}

export const adminConfigurationUrls = {
  general: {
    main: 'configuration/general',
  },
  template: {
    main: 'configuration/template',
  },
  header: {
    main: 'configuration/header',
  },
  theme: {
    main: 'configuration/theme',
  },
  footer: {
    main: 'configuration/footer',
  },
}

export const adminPagesUrls = {
  home: {
    main: 'pages/home-page',
    edit: 'edit/:id',
  },
}
