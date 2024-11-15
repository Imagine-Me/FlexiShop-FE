import { ImageUrls } from 'src/constants/urls.constant'
import { useAxios } from 'src/hooks/axios.hook'
import { IImageModel } from 'src/interfaces/image.interface'
import { useImageStore } from 'src/store/image.store'

export const useImageService = () => {
  const { fetchData,sendFormData, isLoading, error } = useAxios()

  const getImages = async () => {
    const response = await fetchData<IImageModel[]>('get', ImageUrls.GET_ALL)
    if (response) {
      useImageStore.getState().setImages(response)
      return
    }
    useImageStore.getState().setImages([])
  }
  const uploadFiles = async (formData: FormData) => {
    const response = await sendFormData('post', ImageUrls.UPLOAD, formData)
    if(response === "error"){
      throw new Error()
    }
  }

  return { getImages, uploadFiles, isLoading, error }
}
