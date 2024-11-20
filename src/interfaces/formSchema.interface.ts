export interface IFormSchema {
  name?: string
  label: string
  field:
    | 'textfield'
    | 'textarea'
    | 'p'
    | 'h1'
    | 'h5'
    | 'image'
    | 'icon'
    | 'flex-2'
    | 'multiple-links'
    | 'multiple-menu-links'
    | 'social-media-links'
  description?: string
  cols?: number
  metadata?: Record<string, unknown>
  subSchema?: IFormSchema[]
}
