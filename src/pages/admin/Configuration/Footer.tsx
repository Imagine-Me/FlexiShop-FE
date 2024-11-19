import { useState } from 'react'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import useTemplateService from 'src/service/template.service'
import { useTemplateStore } from 'src/store/template.store'
import { useConfigStore } from 'src/store/config.store'
import { FormBuilder } from 'src/components/form/formBuilder/FormBuilder'
import PreviewComponent from 'src/components/generic/previewComponent'
import { footerPageSchema } from 'src/constants/formSchema/footer'

const Footer = () => {
  const [footer] = useTemplateStore((state) => [state.footer])

  const [theme] = useConfigStore((state) => [state.theme])

  const [state, setState] = useState(footer)
  const { isLoading } = useTemplateService()

  const onFormSubmit = async () => {
    if (theme?.name && state) {
      //   updateHeader(theme.name, state)
    }
  }

  return (
    <>
      <Box display="flex" flexWrap="wrap" alignItems="center" sx={{ mb: 8 }}>
        <Typography variant="h3" flex={1}>
          Configurations - General
        </Typography>
        <div>
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
        </div>
      </Box>

      <PreviewComponent>
        {/* <HeaderPreview headerProps={state} /> */}aaa
      </PreviewComponent>

      {state && (
        <FormBuilder
          schema={footerPageSchema}
          value={state}
          onChange={setState}
        />
      )}
    </>
  )
}

export default Footer
