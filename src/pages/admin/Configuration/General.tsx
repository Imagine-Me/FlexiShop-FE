import { Box, Button, CircularProgress, Typography } from '@mui/material'
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
      {state && (
        <FormBuilder
          schema={generalPageSchema}
          value={state}
          onChange={onChange}
        />
      )}
    </>
  )
}
export default GeneralPage
