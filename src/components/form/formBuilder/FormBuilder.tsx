import { Grid, TextField, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import { IconPicker } from 'src/components/generic/iconPicker'
import { ImageUploader } from 'src/components/generic/imageUploader/ImageUploader'
import { IFormSchema } from 'src/interfaces/formSchema.interface'
import { IIcon, IImageModel } from 'src/interfaces/image.interface'
import { MultipleMenuLinks } from '../multipleForms/MultipleMenuLinks'
import {
  IIconLinks,
  ILink,
  ILinkMenu,
} from 'src/interfaces/components/footer.interface'
import { MultipleIconLinks } from '../multipleForms/MultipleIconLinks'
import { MultipleForm } from '../multipleForm'
import { FormLink } from '../formLink'
import { MultipleCategory1 } from '../multipleForms/MultipleCategory1'
import { Category1 } from 'src/interfaces/components/home.interface'

interface IFormBuilderProps<T> {
  schema: IFormSchema[]
  value: T
  onChange?: (value: T) => void
}

export function FormBuilder<T>({
  schema,
  value,
  onChange,
}: IFormBuilderProps<T>) {
  const [formValue, setFormValue] = useState(structuredClone(value))

  const onFormChange = (value: unknown, key: string) => {
    const updatedValue = { ...formValue, [key]: value }
    setFormValue(updatedValue)
    onChange && onChange(updatedValue)
  }

  const getFormElement = useCallback(
    (form: IFormSchema) => {
      switch (form.field) {
        case 'h1':
          return <Typography variant="h1">{form.label}</Typography>
        case 'h5':
          return <Typography variant="h5">{form.label}</Typography>
        case 'p':
          return <Typography>{form.label}</Typography>
        case 'textfield':
          return (
            <TextField
              helperText={form.description}
              label={form.label}
              name={form.name}
              value={(formValue as Record<string, unknown>)[form.name ?? '']}
              onChange={(e) => onFormChange(e.target.value, form.name ?? '')}
            />
          )
        case 'textarea':
          return (
            <TextField
              multiline
              rows={4}
              helperText={form.description}
              label={form.label}
              name={form.name}
              value={(formValue as Record<string, unknown>)[form.name ?? '']}
              onChange={(e) => onFormChange(e.target.value, form.name ?? '')}
            />
          )
        case 'image': {
          let value = (formValue as Record<string, unknown>)[form.name ?? '']
          if (typeof value === 'string') {
            value = []
          } else if (!Array.isArray(value)) {
            value = [value]
          }
          return (
            <ImageUploader
              multiple={form.metadata?.multiple as boolean}
              value={value as IImageModel[]}
              label={form.label}
              name={form.name}
              description={form.description}
              onChange={(value) => onFormChange(value, form.name ?? '')}
            />
          )
        }

        case 'icon': {
          return (
            <IconPicker
              icon={
                (formValue as Record<string, unknown>)[form.name ?? ''] as IIcon
              }
              description={form.description}
              label={form.label}
              onChange={(icon) => onFormChange(icon, form.name ?? '')}
            />
          )
        }

        case 'flex-2': {
          return (
            <Grid container spacing={2}>
              {form.subSchema?.map((subForm, subIndex) => (
                <Grid item key={subIndex} xs={12} md={6}>
                  {getFormElement(subForm)}
                </Grid>
              ))}
            </Grid>
          )
        }

        case 'link':
          return (
            <>
              <Typography sx={{ mb: 2 }}>{form.label}</Typography>
              {form.description && <Typography>{form.description}</Typography>}
              <FormLink
                link={
                  (formValue as Record<string, unknown>)[
                    form.name ?? ''
                  ] as ILink
                }
                onChange={(link: ILink) => onFormChange(link, form.name ?? '')}
              />
            </>
          )

        case 'multiple-menu-links': {
          return (
            <MultipleMenuLinks
              value={
                (formValue as Record<string, unknown>)[
                  form.name ?? ''
                ] as ILinkMenu[]
              }
              onChange={(value) => onFormChange(value, form.name ?? '')}
            />
          )
        }

        case 'social-media-links': {
          return (
            <MultipleIconLinks
              value={
                (formValue as Record<string, unknown>)[
                  form.name ?? ''
                ] as IIconLinks[]
              }
              onChange={(value) => onFormChange(value, form.name ?? '')}
            />
          )
        }

        case 'multiple': {
          return (
            form.metadata && (
              <MultipleForm
                value={
                  (formValue as Record<string, unknown>)[
                    form.name ?? ''
                  ] as IImageModel[]
                }
                label={form.label}
                titleKey="name"
                defaultData={[]}
              >
                {form.metadata.component!}
              </MultipleForm>
            )
          )
        }

        case 'multiple-category1-form':
          return (
            <MultipleCategory1
              value={
                (formValue as Record<string, unknown>)[
                  form.name ?? ''
                ] as Category1['categories']
              }
              onChange={(value) => onFormChange(value, form.name ?? '')}
            />
          )
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formValue]
  )

  return (
    <Grid container spacing={4}>
      {schema.map((value, index) => (
        <Grid item key={index} xs={12} lg={value.cols ?? 12}>
          {getFormElement(value)}
        </Grid>
      ))}
    </Grid>
  )
}
