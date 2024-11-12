import { TextField, TextFieldProps } from '@mui/material'
import { useState } from 'react'

interface NumberFieldProps extends Omit<TextFieldProps, 'onChange'> {
  onChange: (value: number) => void
}

export const NumberField: React.FC<NumberFieldProps> = ({
  onChange,
  value,
  ...props
}) => {
  const [fieldValue, setFieldValue] = useState(value as string)

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.value)
    try {
      const number = parseFloat(e.target.value)
      onChange(number)
    } catch {
      onChange(0)
    }
  }
  return (
    <TextField
      {...props}
      onChange={onFieldChange}
      value={fieldValue}
      type="number"
    />
  )
}
