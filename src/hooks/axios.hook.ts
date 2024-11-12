import axiosInstance from 'src/service/config/axiosConfig'
import { useState } from 'react'

type Method = 'get' | 'post' | 'put' | 'delete' | 'patch'

type ErrorType = {
  response?: {
    data?: {
      message?: string | string[]
    }
  }
}

export const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | string[] | undefined>(undefined)

  const fetchData = async <T>(method: Method, url: string, data?: unknown) => {
    setIsLoading(true)
    setError(undefined)
    try {
      const result = await axiosInstance[method]<T>(url, data)
      setIsLoading(false)
      return result.data
    } catch (error) {
      setError((error as ErrorType)?.response?.data?.message)
      setIsLoading(false)
    }
  }
  const sendFormData = async <T>(
    method: Method,
    url: string,
    data?: unknown
  ) => {
    setIsLoading(true)
    setError(undefined)
    try {
      const result = await axiosInstance[method]<T>(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      setIsLoading(false)
      return result.data
    } catch (error) {
      setError((error as ErrorType)?.response?.data?.message)
      setIsLoading(false)
      return 'error'
    }
  }

  return { isLoading, error, fetchData, sendFormData }
}
