export enum AdminUrls {
  ADMIN_LOGIN_URL = '/user/admin/login',
}

export enum BusinessUrls {
  Home = '/home',
}

export enum AppConfigUrls {
  GENERAL = 'general',
  THEME = 'theme',
}

export enum ImageUrls {
  GET_ALL = '/filestore',
  UPLOAD = '/filestore/upload',
}

export enum TemplateUrls {
  GET = '/templates',
  GET_ALL = '/templates/components',
  UPDATE_HEADER = '/templates/header',
  UPDATE_FOOTER = '/templates/footer',
  UPDATE_HOME = '/templates/home',
  UPDATE_THEME = '/templates/theme',
}

export enum ProductsUrls {
  GET_PRODUCTS = '/products',
  GET_BRANDS = 'products/brands',
  FETCH_BRANDS = 'products/brands/all',
  GET_CATEGORIES = 'products/categories',
  FETCH_CATEGORIES = 'products/categories/all',
  GET_TAGS = 'products/tags',
  FETCH_TAGS = 'products/tags/all',
  GET_VARIANTS = 'products/variants',
  FETCH_VARIANTS_DISTINCT = 'products/variants/distinct/all',
  FETCH_VARIANTS = 'products/variants/all',
}
