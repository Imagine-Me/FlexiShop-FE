import {
  Card,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { useCallback } from 'react'
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
import { AlignField } from '../fields/AlignField'
import { ColorField } from '../fields/ColorField'
import { HtmlEditor } from 'src/components/generic/HtmlEditor/HtmlEditor'
import { BrandField } from '../fields/BrandField'
import { IBrandModel } from 'src/interfaces/product.interface'

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
  const formValue = value

  const onFormChange = (value: unknown, key: string) => {
    const obj = { ...formValue }
    const keys = key.split('.')
    let current: any = obj // Start with the root object
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i]
      if (!current[key]) {
        current[key] = {} // Ensure the key exists
      }
      current = current[key] // Navigate deeper
    }
    current[keys[keys.length - 1]] = value
    onChange && onChange(obj)
  }

  const getFormElement = useCallback(
    (form: IFormSchema) => {
      const splittedName = (form.name ?? '').split('.')
      const fieldValue = splittedName.reduce((acc, value) => {
        return (acc as Record<string, unknown>)[value]
      }, formValue as unknown)
      switch (form.field) {
        case 'h1':
          return <Typography variant="h1">{form.label}</Typography>
        case 'h5':
          return <Typography variant="h5">{form.label}</Typography>
        case 'p':
          return <Typography>{form.label}</Typography>
        case 'card':
          return (
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {form.label}
              </Typography>
              <Grid container spacing={2}>
                {form.metadata?.schema?.map((value, index) => (
                  <Grid item key={index} xs={12} lg={value.cols ?? 12}>
                    {getFormElement(value)}
                  </Grid>
                ))}
              </Grid>
            </Card>
          )
        case 'textfield':
          return (
            <TextField
              helperText={form.description}
              label={form.label}
              name={form.name}
              value={fieldValue}
              onChange={(e) => onFormChange(e.target.value, form.name ?? '')}
            />
          )

        case 'numberField':
          return (
            <TextField
              type="number"
              helperText={form.description}
              label={form.label}
              name={form.name}
              value={fieldValue}
              onChange={(e) => onFormChange(e.target.value, form.name ?? '')}
            />
          )
        case 'alignField':
          return (
            <AlignField
              helperText={form.description}
              label={form.label}
              name={form.name}
              value={fieldValue as string}
              onChange={(e) => onFormChange(e.target.value, form.name ?? '')}
            />
          )
        case 'colorField':
          return (
            <ColorField
              helperText={form.description}
              label={form.label}
              name={form.name}
              value={fieldValue as string}
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
              value={fieldValue}
              onChange={(e) => onFormChange(e.target.value, form.name ?? '')}
            />
          )
        case 'image': {
          let value = fieldValue
          if (typeof value === 'string') {
            value = []
          } else if (
            !Array.isArray(value) &&
            value !== undefined &&
            value !== null
          ) {
            value = [value]
          }

          return (
            <ImageUploader
              multiple={form.metadata?.multiple as boolean}
              value={(value as IImageModel[]) ?? []}
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
              icon={fieldValue as IIcon}
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
                link={fieldValue as ILink}
                onChange={(link: ILink) => onFormChange(link, form.name ?? '')}
              />
            </>
          )

        case 'multiple-menu-links': {
          return (
            <MultipleMenuLinks
              value={fieldValue as ILinkMenu[]}
              onChange={(value) => onFormChange(value, form.name ?? '')}
            />
          )
        }

        case 'social-media-links': {
          return (
            <MultipleIconLinks
              value={fieldValue as IIconLinks[]}
              onChange={(value) => onFormChange(value, form.name ?? '')}
            />
          )
        }

        case 'multiple': {
          return (
            form.metadata && (
              <MultipleForm
                value={(fieldValue as any[]) ?? []}
                label={form.label}
                {...form.metadata.multipleField!}
                onChange={(value) => onFormChange(value, form.name ?? '')}
              >
                {form.metadata.component!}
              </MultipleForm>
            )
          )
        }

        case 'multiple-category1-form':
          return (
            <MultipleCategory1
              value={fieldValue as Category1['categories']}
              onChange={(value) => onFormChange(value, form.name ?? '')}
            />
          )

        case 'htmlEditor': {
          return (
            <HtmlEditor
              onChange={(value) => onFormChange(value, form.name ?? '')}
              value={(fieldValue as string) ?? ''}
              helperText={form.description}
              label={form.label}
            />
          )
        }

        case 'checkbox': {
          return (
            <>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={fieldValue as boolean}
                    onChange={(e) =>
                      onFormChange(e.target.checked, form.name ?? '')
                    }
                  />
                }
                label={form.label}
              />
              {form.description && (
                <FormHelperText>{form.description}</FormHelperText>
              )}
            </>
          )
        }

        case 'brandField': {
          return (
            <BrandField
              label={form.label}
              value={fieldValue as IBrandModel}
              onChange={(value) => onFormChange(value, form.name ?? '')}
            />
          )
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formValue]
  )

  return (
    <Grid container spacing={4}>
      {schema.map((value, index) => {
        const shouldHide = value.shouldHide && value.shouldHide(formValue)
        if (shouldHide) {
          return null
        }
        return (
          <Grid item key={index} xs={12} lg={value.cols ?? 12}>
            {getFormElement(value)}
          </Grid>
        )
      })}
    </Grid>
  )
}
