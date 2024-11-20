import React from 'react'
import { Autocomplete, TextField } from '@mui/material'

interface AutoCompleteInputProps {
  value: string
  options: { label: string; value: string }[] // Predefined options
  label: string // Label for the input
  onChange: (value: string) => void // Callback for value changes
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
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

export default AutoCompleteInput
