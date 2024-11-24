import { Box, Card, TextField } from '@mui/material'
import { Category1 } from 'src/interfaces/components/home.interface'
import { MultipleForm } from '../multipleForm'
import { IconPicker } from 'src/components/generic/iconPicker'
import { FormLink } from '../formLink'
import { category1Data } from 'src/constants/data/home.constant'

interface MultipleCategory1Props {
  value: Category1['categories']
  onChange: (value: Category1['categories']) => void
}
export const MultipleCategory1: React.FC<MultipleCategory1Props> = ({
  onChange,
  value,
}) => {
  return (
    <Card sx={{ p: 2 }}>
      <MultipleForm
        value={value}
        defaultData={category1Data}
        label="Categories"
        titleKey="category"
        onChange={onChange}
      >
        {(state, onChange) => (
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Category"
              value={state.category}
              onChange={(e) => onChange('category', e.target.value)}
            />
            <div>
              <IconPicker
                icon={state.icon}
                label="Category Icon"
                onChange={(icon) => onChange('icon', icon)}
              />
            </div>
            <FormLink
              link={state.link}
              onChange={(link) => onChange('link', link)}
            />
          </Box>
        )}
      </MultipleForm>
    </Card>
  )
}
