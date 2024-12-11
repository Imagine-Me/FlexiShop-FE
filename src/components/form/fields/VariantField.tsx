import { FormControl, FormHelperText } from '@mui/material'
import { useEffect, useState } from 'react'
import AutoCompleteInputFreeSolo, {
  AutoCompleteInputMultiple,
} from 'src/components/generic/autoCompleteInput'
import { IVariantModel } from 'src/interfaces/product.interface'
import { useProductService } from 'src/service/product.service'

interface VariantFieldProps {
  value: string
  label: string
  helperText?: string
  name?: string
  onChange: (value?: string | null) => void
}

export const VariantField: React.FC<VariantFieldProps> = ({
  label,
  onChange,
  value,
  helperText,
}) => {
  const [state, setState] = useState<{ label: string; value: string }[]>([])

  const { fetchVariantsDistinct } = useProductService()

  useEffect(() => {
    fetchVariantsDistinct().then((variants) => {
      if (variants) {
        const updatedValue = variants.map((variant) => ({
          label: variant.name,
          value: variant.name,
        }))
        setState(updatedValue)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FormControl fullWidth>
      <AutoCompleteInputFreeSolo
        options={state}
        label={label}
        onChange={onChange}
        value={value}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

interface VariantFieldGroupByProps {
  value: IVariantModel[]
  label: string
  helperText?: string
  name?: string
  onChange: (value?: IVariantModel[] | null) => void
}

export const VariantFieldGroupBy: React.FC<VariantFieldGroupByProps> = ({
  label,
  onChange,
  value,
  helperText,
}) => {
  const [state, setState] = useState<IVariantModel[]>([])

  const { fetchVariants } = useProductService()

  useEffect(() => {
    fetchVariants().then((variants) => {
      if (variants) {
        setState(variants)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FormControl fullWidth>
      <AutoCompleteInputMultiple
        options={state}
        label={label}
        labelKey="value"
        onChange={onChange}
        value={value}
        groupBy={(option) => option.name}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
