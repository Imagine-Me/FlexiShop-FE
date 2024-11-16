import { useAxios } from 'src/hooks/axios.hook'
import { AdminUrls } from 'src/constants/urls.constant'
import {
  IUserLoginCredentials,
  IUserLoginModel,
} from 'src/interfaces/user.interface'
import { useUserStore } from 'src/store/authentication.store'

const useAuthService = () => {
  const { fetchData, isLoading, error } = useAxios()

  // Login API call to authenticate admin user and retrieve JWT token
  const login = async (credentials: IUserLoginCredentials) => {
    const response = await fetchData<IUserLoginModel>(
      'post',
      AdminUrls.ADMIN_LOGIN_URL,
      credentials
    )
    if (response) {
      useUserStore.getState().setUser(response)
    }
  }

  // Logout API call to invalidate JWT token and remove it from session storage
  const logout = () => {
    sessionStorage.removeItem('authToken')
  }

  return { login, logout, isLoading, error }
}

export default useAuthService
