import { ProductsUrls } from 'src/constants/urls.constant'
import { useAxios } from 'src/hooks/axios.hook'
import { PaginateValue } from 'src/interfaces/common.interface'
import {
  IBrandModel,
  ICategoryModel,
  IProductModel,
} from 'src/interfaces/product.interface'

export const useProductService = () => {
  const { fetchData, isLoading, error } = useAxios()

  //! --------------- PRODUCT CRUD ---------------------------
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

  //! --------------- BRAND CRUD ---------------------------
  const getAllBrands = async (
    page = 1,
    limit = 1
  ): Promise<PaginateValue<IBrandModel[]>> => {
    const response = await fetchData<PaginateValue<IBrandModel[]>>(
      'get',
      `${ProductsUrls.GET_BRANDS}?page=${page}&limit=${limit}`
    )
    if (response) {
      return response
    }
    return { data: [], currentPage: page, total: 0 }
  }

  const fetchBrands = async () => {
    const response = await fetchData<IBrandModel[]>(
      'get',
      ProductsUrls.FETCH_BRANDS
    )
    if (response) {
      return response
    }
  }

  const getBrand = async (id: string) => {
    const response = await fetchData<IProductModel>(
      'get',
      `${ProductsUrls.GET_BRANDS}/${id}`
    )
    if (response) {
      return response
    }
  }

  const createBrand = async (data: IBrandModel) => {
    const response = await fetchData<IProductModel>(
      'post',
      ProductsUrls.GET_BRANDS,
      { ...data }
    )
    if (response) {
      return response
    }
  }

  const updateBrand = async (id: string, data: IBrandModel) => {
    const response = await fetchData<IProductModel>(
      'patch',
      `${ProductsUrls.GET_BRANDS}/${id}`,
      { ...data }
    )
    if (response) {
      return response
    }
  }

  const deleteBrand = async (id: string) => {
    const response = await fetchData<IProductModel>(
      'delete',
      `${ProductsUrls.GET_BRANDS}/${id}`
    )
    if (response) {
      return response
    }
  }

  //! --------------- CATEGORY CRUD ---------------------------
  const getAllCategories = async (
    page = 1,
    limit = 1
  ): Promise<PaginateValue<ICategoryModel[]>> => {
    const response = await fetchData<PaginateValue<ICategoryModel[]>>(
      'get',
      `${ProductsUrls.GET_CATEGORIES}?page=${page}&limit=${limit}`
    )
    if (response) {
      return response
    }
    return { data: [], currentPage: page, total: 0 }
  }

  const getCategory = async (id: string) => {
    const response = await fetchData<ICategoryModel>(
      'get',
      `${ProductsUrls.GET_CATEGORIES}/${id}`
    )
    if (response) {
      return response
    }
  }

  const createCategory = async (data: ICategoryModel) => {
    const response = await fetchData<ICategoryModel>(
      'post',
      ProductsUrls.GET_CATEGORIES,
      { ...data }
    )
    if (response) {
      return response
    }
  }

  const updateCategory = async (id: string, data: ICategoryModel) => {
    const response = await fetchData<ICategoryModel>(
      'patch',
      `${ProductsUrls.GET_CATEGORIES}/${id}`,
      { ...data }
    )
    if (response) {
      return response
    }
  }

  const deleteCategory = async (id: string) => {
    const response = await fetchData<ICategoryModel>(
      'delete',
      `${ProductsUrls.GET_CATEGORIES}/${id}`
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
    getAllBrands,
    getBrand,
    createBrand,
    deleteBrand,
    updateBrand,
    getAllCategories,
    getCategory,
    createCategory,
    deleteCategory,
    updateCategory,
    fetchBrands
  }
}
