import { TextField } from '@mui/material'
import { useState } from 'react'
import AutoCompleteInput from 'src/components/generic/autoCompleteInput'
import { BusinessUrls } from 'src/constants/urls.constant'
import { ILink } from 'src/interfaces/components/footer.interface'

const appLinks = Object.entries(BusinessUrls).map(([label, value]) => ({
  label,
  value,
}))

interface IFormLinkProps {
  link: ILink
  onChange?: (key: keyof ILink, value: any) => void
}

export const FormLink: React.FC<IFormLinkProps> = ({ link, onChange }) => {
  const [state, setState] = useState(structuredClone(link))

  const onLinkChanged = (key: keyof ILink, value: string) => {
    const updatedState = { ...state }
    let updatedValue = value
    if (key === 'url') {
      const actualUrl = appLinks.find((link) => link.label === value)?.value
      if (actualUrl) {
        updatedValue = actualUrl
      }
    }
    updatedState[key] = value
    setState(updatedState)
    onChange && onChange(key, updatedValue)
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
      <AutoCompleteInput
        value={state.url}
        options={appLinks}
        label="URL"
        onChange={(value) => onLinkChanged('url', value)}
      />
    </>
  )
}
