import { ProductsUrls } from 'src/constants/urls.constant'
import { useAxios } from 'src/hooks/axios.hook'
import { PaginateValue } from 'src/interfaces/common.interface'
import { IProductModel } from 'src/interfaces/product.interface'

export const useProductService = () => {
  const { fetchData, isLoading, error } = useAxios()

  const getAllProducts = async (
    page = 1,
    limit = 1
  ): Promise<PaginateValue<IProductModel[]>> => {
    const response = await fetchData<PaginateValue<IProductModel[]>>(
      'get',
      `${ProductsUrls.GET_PRODUCTS}?page=${page}&limit=${limit}`
    )
    if (response) {
      return response
    }
    return { data: [], currentPage: page, total: 0 }
  }

  return { isLoading, error, getAllProducts }
}
