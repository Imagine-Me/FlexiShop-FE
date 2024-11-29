import { TextField } from '@mui/material'
import { useState } from 'react'
import AutoCompleteInputFreeSolo from 'src/components/generic/autoCompleteInput'
import { BusinessUrls } from 'src/constants/urls.constant'
import { ILink } from 'src/interfaces/components/footer.interface'

const appLinks = Object.entries(BusinessUrls).map(([label, value]) => ({
  label,
  value,
}))

type IFormLinkProps = {
  link: ILink
  onChange?: (value: ILink) => void
}

export const FormLink: React.FC<IFormLinkProps> = ({ link, onChange }) => {
  const [state, setState] = useState(structuredClone(link))

  const onLinkChanged = (key: keyof ILink, value: string) => {
    const updatedState = { ...state }
    updatedState[key] = value
    setState(updatedState)
    onChange && onChange(updatedState)
  }

  return (
    <>
      <TextField
        sx={{ mb: 2 }}
        value={state.title}
        onChange={(e) => onLinkChanged('title', e.target.value)}
        label="Title"
        helperText="Title for the link"
      />
      <AutoCompleteInputFreeSolo
        value={state.url}
        options={appLinks}
        label="URL"
        onChange={(value) => onLinkChanged('url', value)}
      />
    </>
  )
}
