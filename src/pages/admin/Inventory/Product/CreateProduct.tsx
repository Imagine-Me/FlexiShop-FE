import { Link, useNavigate, useParams } from 'react-router-dom'
import { PageWrapper } from '../../Landing/PageWrapper'
import { Button, CircularProgress, Grid } from '@mui/material'
import { adminInventoryUrls } from 'src/constants/routes.constant'
import { FormBuilder } from 'src/components/form/formBuilder/FormBuilder'
import { productSchema } from 'src/constants/formSchema/product'
import { productData } from 'src/constants/data/product.constant'
import { IProductModel } from 'src/interfaces/product.interface'
import { useProductService } from 'src/service/product.service'
import { useEffect, useState } from 'react'
import { Error } from 'src/components/generic/error'

export const CreateProduct = () => {
  const [state, setState] = useState(productData)

  const { createProduct, isLoading, getProduct, updateProduct, error } =
    useProductService()

  const navigate = useNavigate()
  const { productId } = useParams()

  const onChange = async (data: Partial<IProductModel>) => {
    setState(data)
  }

  const onFormSubmit = async () => {
    if (!productId) {
      const res = await createProduct(state)
      if (res) {
        navigate(`/admin/${adminInventoryUrls.product.main}/edit/${res?.id}`)
      }
    } else {
      const res = await updateProduct(productId, state)
      if (res) {
        setState(res)
      }
    }
  }

  useEffect(() => {
    if (productId) {
      getProduct(productId).then((product) => {
        if (product) {
          setState(product)
        }
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId])

  const breadcrumbs = [{ title: 'Inventory' }, { title: 'Product' }]

  if (productId) {
    breadcrumbs.push({ title: 'Edit' })
    breadcrumbs.push({ title: state.name ?? '' })
  } else {
    breadcrumbs.push({ title: 'Create' })
  }

  return (
    <PageWrapper
      breadcrumbs={breadcrumbs}
      footer={{
        left: (
          <Link to={`/admin/${adminInventoryUrls.product.main}`}>
            <Button>Back</Button>
          </Link>
        ),
        right: (
          <Button
            variant="contained"
            disabled={isLoading}
            onClick={onFormSubmit}
          >
            {isLoading && (
              <CircularProgress sx={{ mr: 1, color: 'white' }} size={12} />
            )}
            {productId ? 'Update' : 'Create'}
          </Button>
        ),
      }}
    >
      <Error error={error} />
      <Grid container spacing={3}>
        <Grid item sm={12} lg={8}>
          <FormBuilder
            schema={productSchema}
            value={state}
            onChange={onChange}
          />
        </Grid>
        <Grid item sm={12} lg={4}>
          2
        </Grid>
      </Grid>
    </PageWrapper>
  )
}
