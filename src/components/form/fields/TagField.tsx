import { useEffect, useState } from 'react'
import { AutoCompleteInputMultiple } from 'src/components/generic/autoCompleteInput'
import { ITagModel } from 'src/interfaces/product.interface'
import { useProductService } from 'src/service/product.service'

interface TagFieldProps {
  value: ITagModel[]
  label: string
  helperText?: string
  name?: string
  onChange: (value?: ITagModel[] | null) => void
}

export const TagField: React.FC<TagFieldProps> = ({
  label,
  onChange,
  value,
  helperText,
  name,
}) => {
  const [state, setState] = useState<ITagModel[]>([])

  const { fetchTags } = useProductService()

  useEffect(() => {
    fetchTags().then((tags) => {
      if (tags) {
        setState(tags)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AutoCompleteInputMultiple
      options={state}
      label={label}
      labelKey="name"
      onChange={onChange}
      value={value}
      helperText={helperText}
      name={name}
    />
  )
}
