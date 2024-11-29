export enum StatusEnum {
  ACTIVE = 'active',
  DRAFT = 'draft',
  ARCHIVED = 'archived',
}

export interface PaginateValue<T> {
  data: T
  total: number
  currentPage: number
}
