import axios from 'axios'
import { useUserStore } from 'src/store/authentication.store'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

let isRefreshing = false
const failedQueue: Array<{
  resolve: (value: string) => void
  reject: (value: string) => void
}> = []

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = useUserStore.getState().data?.access_token
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      useUserStore.getState().removeUser()
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then((token) => {
            originalRequest.headers['Authorization'] = 'Bearer ' + token
            return axiosInstance(originalRequest)
          })
          .catch((err) => {
            return Promise.reject(err)
          })
      }

      originalRequest._retry = true
      isRefreshing = true
      return null
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
