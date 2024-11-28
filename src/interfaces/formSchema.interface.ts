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
    | 'card'
    | 'alignField'
    | 'colorField'
    | 'numberField'
    | 'htmlEditor'
  description?: string
  cols?: number
  metadata?: {
    component?: (state: any, onChange: any) => React.ReactNode
    schema?: IFormSchema[]
    multipleField?: {
      titleKey: string
      defaultData: Record<string, unknown>
    }
    [key: string]: unknown
  }

  subSchema?: IFormSchema[]
}
