import { ThemeOptions } from '@mui/material'
import { TemplateUrls } from 'src/constants/urls.constant'
import { useAxios } from 'src/hooks/axios.hook'
import { IFooter } from 'src/interfaces/components/footer.interface'
import { IHeader } from 'src/interfaces/components/header.interface'
import { HomeComponents } from 'src/interfaces/components/home.interface'
import { ITemplateModel } from 'src/interfaces/template.interface'
import { useTemplateStore } from 'src/store/template.store'

const useTemplateService = () => {
  const { fetchData, isLoading, error } = useAxios()

  const getTemplate = async (name: string) => {
    const response = await fetchData<ITemplateModel>(
      'get',
      `${TemplateUrls.GET}/${name}`
    )
    if (response) {
      useTemplateStore.getState().setTemplate(response)
    }
  }

  const getAllComponents = async () => {
    const response = await fetchData<HomeComponents[]>(
      'get',
      TemplateUrls.GET_ALL
    )
    if (response) {
      return response
    }
  }

  const updateHeader = async (name: string, data: IHeader) => {
    const response = await fetchData<ITemplateModel>(
      'post',
      `${TemplateUrls.UPDATE_HEADER}/${name}`,
      { ...data }
    )
    if (response) {
      useTemplateStore.getState().setTemplate(response)
    }
  }

  const updateFooter = async (name: string, data: IFooter) => {
    const response = await fetchData<ITemplateModel>(
      'post',
      `${TemplateUrls.UPDATE_FOOTER}/${name}`,
      { ...data }
    )
    if (response) {
      useTemplateStore.getState().setTemplate(response)
    }
  }

  const updateTheme = async (name: string, data: ThemeOptions) => {
    const response = await fetchData<ITemplateModel>(
      'post',
      `${TemplateUrls.UPDATE_THEME}/${name}`,
      { ...data }
    )
    if (response) {
      useTemplateStore.getState().setTemplate(response)
    }
  }

  const updateHomeComponents = async (name: string, data: HomeComponents[]) => {
    const response = await fetchData<ITemplateModel>(
      'post',
      `${TemplateUrls.UPDATE_HOME}/${name}`,
      { data }
    )
    if (response) {
      useTemplateStore.getState().setTemplate(response)
    }
  }

  //   const getConfig = async <T>(type: AppConfigUrls) => {
  //     const response = await fetchData<T>(
  //       'get',
  //       `${BusinessURL.APP_CONFIG_URL}/${type}`
  //     )
  //     if (response) {
  //       return response
  //     }
  //   }

  //   const updateConfig = async <T>(type: AppConfigUrls, data: unknown) => {
  //     const response = await fetchData(
  //       'patch',
  //       `${BusinessURL.APP_CONFIG_URL}/${type}`,
  //       { data }
  //     )
  //     if (response) {
  //       return await getConfig<T>(type)
  //     }
  //   }

  return {
    getTemplate,
    updateHeader,
    updateFooter,
    getAllComponents,
    updateHomeComponents,
    updateTheme,
    isLoading,
    error,
  }
}

export default useTemplateService
