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
    | 'link'
    | 'icon'
    | 'flex-2'
    | 'multiple-links'
    | 'multiple-menu-links'
    | 'social-media-links'
    | 'multiple'
    | 'multiple-category1-form'
  description?: string
  cols?: number
  metadata?: {
    component?: (state: any, onChange: any) => React.ReactNode
    [key: string]: unknown
  }

  subSchema?: IFormSchema[]
}
