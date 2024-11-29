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

  const getProduct = async (id: string) => {
    const response = await fetchData<IProductModel>(
      'get',
      `${ProductsUrls.GET_PRODUCTS}/${id}`
    )
    if (response) {
      return response
    }
  }

  const createProduct = async (
    data: Partial<
      IProductModel & {
        isVariant: boolean
      }
    >
  ) => {
    const response = await fetchData<IProductModel>(
      'post',
      ProductsUrls.GET_PRODUCTS,
      { ...data }
    )
    if (response) {
      return response
    }
  }

  const updateProduct = async (
    id: string,
    data: Partial<
      IProductModel & {
        isVariant: boolean
      }
    >
  ) => {
    const response = await fetchData<IProductModel>(
      'patch',
      `${ProductsUrls.GET_PRODUCTS}/${id}`,
      { ...data }
    )
    if (response) {
      return response
    }
  }

  const deleteProduct = async (id: string) => {
    const response = await fetchData<IProductModel>(
      'delete',
      `${ProductsUrls.GET_PRODUCTS}/${id}`
    )
    if (response) {
      return response
    }
  }

  return {
    isLoading,
    error,
    getAllProducts,
    createProduct,
    deleteProduct,
    getProduct,
    updateProduct,
  }
}
