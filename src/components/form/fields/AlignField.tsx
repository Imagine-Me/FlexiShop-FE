import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { AlignmentEnum } from 'src/interfaces/components/common.interface'
import { capitalizeFirstLetter } from 'src/utils/string.utils'

const options = Object.values(AlignmentEnum).map((value) => ({
  value,
  label: capitalizeFirstLetter(value),
}))

interface AlignField {
  value: string
  label: string
  helperText?: string
  name?: string
  onChange: (event: SelectChangeEvent<string>) => void
}

export const AlignField: React.FC<AlignField> = ({
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
