import { TemplateUrls } from 'src/constants/urls.constant'
import { useAxios } from 'src/hooks/axios.hook'
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

  return { getTemplate, isLoading, error }
}

export default useTemplateService
