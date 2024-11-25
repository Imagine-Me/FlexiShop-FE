import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { ColorEnum } from 'src/interfaces/components/common.interface'
import { capitalizeFirstLetter } from 'src/utils/string.utils'

const options = Object.values(ColorEnum).map((value) => ({
  value,
  label: capitalizeFirstLetter(value),
}))

interface ColorFieldProps {
  value: string
  label: string
  helperText?: string
  name?: string
  onChange: (event: SelectChangeEvent<string>) => void
}

export const ColorField: React.FC<ColorFieldProps> = ({
  onChange,
  value,
  helperText,
  name,
  label,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} label={label} name={name}>
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <Typography variant="body2"></Typography>}
    </FormControl>
  )
}
