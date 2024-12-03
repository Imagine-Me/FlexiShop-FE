import { ProductsUrls } from 'src/constants/urls.constant'
import { useAxios } from 'src/hooks/axios.hook'
import { PaginateValue } from 'src/interfaces/common.interface'
import {
  IBrandModel,
  ICategoryModel,
  IProductModel,
  IProductSearchModel,
  ITagModel,
  IVariantModel,
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

  const searchProducts = async (product: string) => {
    const response = await fetchData<IProductSearchModel[]>(
      'get',
      `${ProductsUrls.SEARCH_PRODUCTS}/${product}`
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

  const fetchCategories = async () => {
    const response = await fetchData<ICategoryModel[]>(
      'get',
      ProductsUrls.FETCH_CATEGORIES
    )
    if (response) {
      return response
    }
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

  //! --------------- TAGS CRUD ---------------------------
  const getAllTags = async (
    page = 1,
    limit = 1
  ): Promise<PaginateValue<ITagModel[]>> => {
    const response = await fetchData<PaginateValue<ITagModel[]>>(
      'get',
      `${ProductsUrls.GET_TAGS}?page=${page}&limit=${limit}`
    )
    if (response) {
      return response
    }
    return { data: [], currentPage: page, total: 0 }
  }

  const fetchTags = async () => {
    const response = await fetchData<ITagModel[]>(
      'get',
      ProductsUrls.FETCH_TAGS
    )
    if (response) {
      return response
    }
  }

  const getTag = async (id: string) => {
    const response = await fetchData<ITagModel>(
      'get',
      `${ProductsUrls.GET_TAGS}/${id}`
    )
    if (response) {
      return response
    }
  }

  const createTag = async (data: ITagModel) => {
    const response = await fetchData<ITagModel>('post', ProductsUrls.GET_TAGS, {
      ...data,
    })
    if (response) {
      return response
    }
  }

  const updateTag = async (id: string, data: ITagModel) => {
    const response = await fetchData<ITagModel>(
      'patch',
      `${ProductsUrls.GET_TAGS}/${id}`,
      { ...data }
    )
    if (response) {
      return response
    }
  }

  const deleteTag = async (id: string) => {
    const response = await fetchData<ITagModel>(
      'delete',
      `${ProductsUrls.GET_TAGS}/${id}`
    )
    if (response) {
      return response
    }
  }

  //! --------------- VARIANTS CRUD ---------------------------
  const getAllVariants = async (
    page = 1,
    limit = 1
  ): Promise<PaginateValue<IVariantModel[]>> => {
    const response = await fetchData<PaginateValue<IVariantModel[]>>(
      'get',
      `${ProductsUrls.GET_VARIANTS}?page=${page}&limit=${limit}`
    )
    if (response) {
      return response
    }
    return { data: [], currentPage: page, total: 0 }
  }

  const fetchVariantsDistinct = async () => {
    const response = await fetchData<IVariantModel[]>(
      'get',
      ProductsUrls.FETCH_VARIANTS_DISTINCT
    )
    if (response) {
      return response
    }
  }

  const fetchVariants = async () => {
    const response = await fetchData<IVariantModel[]>(
      'get',
      ProductsUrls.FETCH_VARIANTS
    )
    if (response) {
      return response
    }
  }

  const getVariant = async (id: string) => {
    const response = await fetchData<IVariantModel>(
      'get',
      `${ProductsUrls.GET_VARIANTS}/${id}`
    )
    if (response) {
      return response
    }
  }

  const createVariant = async (data: IVariantModel) => {
    const response = await fetchData<IVariantModel>(
      'post',
      ProductsUrls.GET_VARIANTS,
      {
        ...data,
      }
    )
    if (response) {
      return response
    }
  }

  const updateVariant = async (id: string, data: IVariantModel) => {
    const response = await fetchData<IVariantModel>(
      'patch',
      `${ProductsUrls.GET_VARIANTS}/${id}`,
      { ...data }
    )
    if (response) {
      return response
    }
  }

  const deleteVariant = async (id: string) => {
    const response = await fetchData<IVariantModel>(
      'delete',
      `${ProductsUrls.GET_VARIANTS}/${id}`
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
    searchProducts,
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
    fetchBrands,
    fetchCategories,
    fetchTags,
    getAllTags,
    getTag,
    createTag,
    deleteTag,
    updateTag,
    fetchVariants,
    getAllVariants,
    fetchVariantsDistinct,
    getVariant,
    createVariant,
    updateVariant,
    deleteVariant,
  }
}
