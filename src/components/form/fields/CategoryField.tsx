import { useEffect, useState } from 'react'
import { AutoCompleteInput } from 'src/components/generic/autoCompleteInput'
import { ICategoryModel } from 'src/interfaces/product.interface'
import { useProductService } from 'src/service/product.service'

interface CategoryFieldProps {
  value: ICategoryModel
  label: string
  helperText?: string
  name?: string
  onChange: (value?: ICategoryModel | null) => void
}

export const CategoryField: React.FC<CategoryFieldProps> = ({
  label,
  onChange,
  value,
  helperText,
  name,
}) => {
  const [state, setState] = useState<ICategoryModel[]>([])

  const { fetchCategories } = useProductService()

  useEffect(() => {
    fetchCategories().then((categories) => {
      if (categories) {
        setState(categories)
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
