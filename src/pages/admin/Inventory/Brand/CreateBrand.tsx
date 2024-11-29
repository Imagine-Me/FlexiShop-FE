import { Link, useNavigate, useParams } from 'react-router-dom'
import { PageWrapper } from '../../Landing/PageWrapper'
import { Button, CircularProgress } from '@mui/material'
import { adminInventoryUrls } from 'src/constants/routes.constant'
import { FormBuilder } from 'src/components/form/formBuilder/FormBuilder'
import { brandSchema } from 'src/constants/formSchema/product'
import { brandData } from 'src/constants/data/product.constant'
import { IBrandModel } from 'src/interfaces/product.interface'
import { useProductService } from 'src/service/product.service'
import { useEffect, useState } from 'react'
import { Error } from 'src/components/generic/error'

export const CreateBrand = () => {
  const [state, setState] = useState(brandData)

  const { createBrand, isLoading, getBrand, updateBrand, error } =
    useProductService()

  const navigate = useNavigate()
  const { brandId } = useParams()

  const onChange = async (data: IBrandModel) => {
    setState(data)
  }

  const onFormSubmit = async () => {
    if (!brandId) {
      const res = await createBrand(state)
      if (res) {
        navigate(`/admin/${adminInventoryUrls.brand.main}/edit/${res?.id}`)
      }
    } else {
      const res = await updateBrand(brandId, state)
      if (res) {
        setState(res)
      }
    }
  }

  useEffect(() => {
    if (brandId) {
      getBrand(brandId).then((brand) => {
        if (brand) {
          setState(brand)
        }
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandId])

  const breadcrumbs = [
    { title: 'Inventory' },
    { title: 'Brand', link: `/admin/${adminInventoryUrls.brand.main}` },
  ]

  if (brandId) {
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
          <Link to={`/admin/${adminInventoryUrls.brand.main}`}>
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
            {brandId ? 'Update' : 'Create'}
          </Button>
        ),
      }}
    >
      <Error error={error} />
      <FormBuilder schema={brandSchema} value={state} onChange={onChange} />
    </PageWrapper>
  )
}
