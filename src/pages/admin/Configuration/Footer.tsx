import { useState } from 'react'
import { Button, CircularProgress } from '@mui/material'
import useTemplateService from 'src/service/template.service'
import { useTemplateStore } from 'src/store/template.store'
import { useConfigStore } from 'src/store/config.store'
import { FormBuilder } from 'src/components/form/formBuilder/FormBuilder'
import PreviewComponent from 'src/components/generic/previewComponent'
import { footerPageSchema } from 'src/constants/formSchema/footer'
import { FooterPreview } from 'src/components/admin/adminFooter'
import { PageWrapper } from '../Landing/PageWrapper'

const Footer = () => {
  const [footer] = useTemplateStore((state) => [state.footer])

  const [theme] = useConfigStore((state) => [state.theme])

  const [state, setState] = useState(footer)
  const { isLoading, updateFooter } = useTemplateService()

  const onFormSubmit = async () => {
    if (theme?.name && state) {
      updateFooter(theme.name, state)
    }
  }

  return (
    <PageWrapper
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
      breadcrumbs={[{ title: 'Configurations' }, { title: 'Footer' }]}
    >
      <PreviewComponent>
        <FooterPreview footerProps={state} />
      </PreviewComponent>

      {state && (
        <FormBuilder
          schema={footerPageSchema}
          value={state}
          onChange={setState}
        />
      )}
    </PageWrapper>
  )
}

export default Footer
