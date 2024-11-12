export interface IGenericComponent<T> {
  desktop: T
  tab?: Partial<T>
  mobile?: Partial<T>
}
