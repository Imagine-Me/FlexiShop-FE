import { useEffect, useState } from 'react'
import { AutoCompleteInput } from 'src/components/generic/autoCompleteInput'
import { IBrandModel } from 'src/interfaces/product.interface'
import { useProductService } from 'src/service/product.service'

interface BrandFieldProps {
  value: IBrandModel
  label: string
  helperText?: string
  name?: string
  onChange: (value?: IBrandModel | null) => void
}

export const BrandField: React.FC<BrandFieldProps> = ({
  label,
  onChange,
  value,
  helperText,
  name,
}) => {
  const [state, setState] = useState<IBrandModel[]>([])

  const { fetchBrands } = useProductService()

  useEffect(() => {
    fetchBrands().then((brands) => {
      if (brands) {
        setState(brands)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AutoCompleteInput
      options={state}
      label={label}
      labelKey="name"
      valueKey="id"
      onChange={onChange}
      value={value}
      helperText={helperText}
      name={name}
    />
  )
}
