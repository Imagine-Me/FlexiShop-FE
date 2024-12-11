import React from 'react'
import {
  Autocomplete,
  FormControl,
  FormHelperText,
  TextField,
} from '@mui/material'

interface AutoCompleteInputFreeSolo {
  value: string
  options: { label: string; value: string }[] // Predefined options
  label: string // Label for the input
  onChange: (value: string) => void // Callback for value changes
}

const AutoCompleteInputFreeSolo: React.FC<AutoCompleteInputFreeSolo> = ({
  options,
  label,
  onChange,
  value,
}) => {
  const handleInputChange = (_: any, value: string) => {
    onChange(value) // Notify parent about the change
  }

  return (
    <Autocomplete
      freeSolo
      options={options}
      onInputChange={handleInputChange}
      value={value}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  )
}

export default AutoCompleteInputFreeSolo

interface AutoCompleteInputProps<T> {
  value: T
  options: T[]
  label: string
  labelKey: keyof T
  valueKey: keyof T
  helperText?: string
  name?: string
  groupBy?: ((option: T) => string) | undefined
  onChange: (value?: T | null) => void
}

export const AutoCompleteInput = <T,>({
  label,
  onChange,
  groupBy,
  value,
  helperText,
  name,
  options,
  labelKey,
  valueKey,
}: AutoCompleteInputProps<T>) => {
  const selectedValue = { ...value }
  return (
    <FormControl fullWidth>
      <Autocomplete
        value={selectedValue}
        disablePortal
        options={options}
        getOptionLabel={(value) => (value[labelKey] as string) ?? ''}
        onChange={(_, value) => {
          onChange(value)
        }}
        isOptionEqualToValue={(option) =>
          value?.[valueKey] === option?.[valueKey]
        }
        renderInput={(params) => (
          <TextField {...params} label={label} name={name} />
        )}
        groupBy={groupBy}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

interface AutoCompleteInputMultipleProps<T> {
  value: T[]
  options: T[]
  label: string
  labelKey: keyof T
  helperText?: string
  name?: string
  onChange: (value?: T[] | null) => void
  groupBy?: (option: T) => string
}

export const AutoCompleteInputMultiple = <T,>({
  label,
  onChange,
  value,
  helperText,
  name,
  options,
  labelKey,
  groupBy,
}: AutoCompleteInputMultipleProps<T>) => {
  return (
    <FormControl fullWidth>
      <Autocomplete
        value={value}
        disablePortal
        options={options}
        getOptionLabel={(value) => (value[labelKey] as string) ?? ''}
        onChange={(_, value) => {
          onChange(value)
        }}
        renderInput={(params) => (
          <TextField {...params} label={label} name={name} />
        )}
        multiple
        groupBy={groupBy}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
