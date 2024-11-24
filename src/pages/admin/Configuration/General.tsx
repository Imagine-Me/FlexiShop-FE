import { Button, CircularProgress } from '@mui/material'
import { useState } from 'react'
import { FormBuilder } from 'src/components/form/formBuilder/FormBuilder'
import { generalPageSchema } from 'src/constants/formSchema/general'
import { AppConfigUrls } from 'src/constants/urls.constant'
import {
  ICustomConfigModel,
  IGeneralConfigData,
} from 'src/interfaces/config.interface'
import useConfigService from 'src/service/config.service'
import { useConfigStore } from 'src/store/config.store'
import { PageWrapper } from '../Landing/PageWrapper'

const GeneralPage = () => {
  const { general, setGeneral } = useConfigStore()
  const [state, setState] = useState(general)
  const { isLoading, updateConfig } = useConfigService()

  const onChange = (data: IGeneralConfigData) => {
    setState(data as typeof general)
  }
  const onFormSubmit = async () => {
    const response = await updateConfig<
      ICustomConfigModel<'general', IGeneralConfigData>
    >(AppConfigUrls.GENERAL, state)
    if (response) {
      setGeneral(response.data)
    }
  }
  return (
    <PageWrapper
      breadcrumbs={[{ title: 'Configurations' }, { title: 'General' }]}
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
      {state && (
        <FormBuilder
          schema={generalPageSchema}
          value={state}
          onChange={onChange}
        />
      )}
    </PageWrapper>
  )
}
export default GeneralPage
