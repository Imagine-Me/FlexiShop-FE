import { Grid, TextField, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import { ImageUploader } from 'src/components/generic/imageUploader/ImageUploader'
import { IFormSchema } from 'src/interfaces/formSchema.interface'
import { IImageModel } from 'src/interfaces/image.interface'

interface IFormBuilderProps<T> {
  schema: IFormSchema[]
  value: T
  onChange?: (value: T) => void
}

export function FormBuilder<T = unknown>({
  schema,
  value,
  onChange,
}: IFormBuilderProps<T>) {
  const [formValue, setFormValue] = useState(structuredClone(value))

  const onFormChange = (value: unknown, key: string) => {
    console.log(key, value)
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
