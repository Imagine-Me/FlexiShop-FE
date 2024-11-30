import { Link, useNavigate, useParams } from 'react-router-dom'
import { PageWrapper } from '../../Landing/PageWrapper'
import { Button, CircularProgress } from '@mui/material'
import { adminInventoryUrls } from 'src/constants/routes.constant'
import { FormBuilder } from 'src/components/form/formBuilder/FormBuilder'
import { variantSchema } from 'src/constants/formSchema/product'
import { variantData } from 'src/constants/data/product.constant'
import { IVariantModel } from 'src/interfaces/product.interface'
import { useProductService } from 'src/service/product.service'
import { useEffect, useState } from 'react'
import { Error } from 'src/components/generic/error'

export const CreateVariant = () => {
  const [state, setState] = useState(variantData)

  const { createVariant, isLoading, getVariant, updateVariant, error } =
    useProductService()

  const navigate = useNavigate()
  const { variantId } = useParams()

  const onChange = async (data: IVariantModel) => {
    setState(data)
  }

  const onFormSubmit = async () => {
    if (!variantId) {
      const res = await createVariant(state)
      if (res) {
        navigate(`/admin/${adminInventoryUrls.variants.main}/edit/${res?.id}`)
      }
    } else {
      const res = await updateVariant(variantId, state)
      if (res) {
        setState(res)
      }
    }
  }

  useEffect(() => {
    if (variantId) {
      getVariant(variantId).then((tag) => {
        if (tag) {
          setState(tag)
        }
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variantId])

  const breadcrumbs = [
    { title: 'Inventory' },
    { title: 'Variant', link: `/admin/${adminInventoryUrls.variants.main}` },
  ]

  if (variantId) {
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
          <Link to={`/admin/${adminInventoryUrls.variants.main}`}>
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
            {variantId ? 'Update' : 'Create'}
          </Button>
        ),
      }}
    >
      <Error error={error} />
      <FormBuilder schema={variantSchema} value={state} onChange={onChange} />
    </PageWrapper>
  )
}
