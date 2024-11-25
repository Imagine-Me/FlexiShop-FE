import { useState } from 'react'
import { Button, CircularProgress } from '@mui/material'
import useTemplateService from 'src/service/template.service'
import { useTemplateStore } from 'src/store/template.store'
import { headerPageSchema } from 'src/constants/formSchema/header'
import { useConfigStore } from 'src/store/config.store'
import { FormBuilder } from 'src/components/form/formBuilder/FormBuilder'
import PreviewComponent from 'src/components/generic/previewComponent'
import { HeaderPreview } from 'src/components/admin/adminHeader'
import { PageWrapper } from '../Landing/PageWrapper'

const Header = () => {
  const [header] = useTemplateStore((state) => [state.header])

  const [theme] = useConfigStore((state) => [state.theme])

  const [state, setState] = useState(header)
  const { isLoading, updateHeader } = useTemplateService()

  const onFormSubmit = async () => {
    if (theme?.name && state) {
      updateHeader(theme.name, state)
    }
  }

  return (
    <PageWrapper
      breadcrumbs={[{ title: 'Configurations' }, { title: 'Header' }]}
      footer={{
        right: (
          <Button
            variant="contained"
            disabled={isLoading}
            onClick={onFormSubmit}
          >
            {isLoading && (
              <CircularProgress sx={{ mr: 1, color: 'white' }} size={12} />
            )}
            Update
          </Button>
        ),
      }}
    >
      <PreviewComponent>
        <HeaderPreview headerProps={state} />
      </PreviewComponent>

      {state && (
        <FormBuilder
          schema={headerPageSchema}
          value={state}
          onChange={setState}
        />
      )}
    </PageWrapper>
  )
}

export default Header
