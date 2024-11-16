import { AppConfigUrls } from 'src/constants/urls.constant'
import { useAxios } from 'src/hooks/axios.hook'
import { IConfigModel } from 'src/interfaces/config.interface'
import { BusinessURL } from 'src/service/config/url.constant'
import { useConfigStore } from 'src/store/config.store'

const useConfigService = () => {
  const { fetchData, isLoading, error } = useAxios()

  const getConfigs = async () => {
    const response = await fetchData<IConfigModel>(
      'get',
      BusinessURL.APP_CONFIG_URL
    )
    if (response) {
      useConfigStore.getState().setConfigs(response)
    }
  }

  const getConfig = async <T>(type: AppConfigUrls) => {
    const response = await fetchData<T>(
      'get',
      `${BusinessURL.APP_CONFIG_URL}/${type}`
    )
    if (response) {
      return response
    }
  }

  const updateConfig = async <T>(type: AppConfigUrls, data: unknown) => {
    const response = await fetchData(
      'patch',
      `${BusinessURL.APP_CONFIG_URL}/${type}`,
      { data }
    )
    if (response) {
      return await getConfig<T>(type)
    }
  }

  return { getConfig, updateConfig, getConfigs, isLoading, error }
}

export default useConfigService
