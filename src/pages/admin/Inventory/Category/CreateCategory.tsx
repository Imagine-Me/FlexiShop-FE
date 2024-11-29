import { Link, useNavigate, useParams } from 'react-router-dom'
import { PageWrapper } from '../../Landing/PageWrapper'
import { Button, CircularProgress } from '@mui/material'
import { adminInventoryUrls } from 'src/constants/routes.constant'
import { FormBuilder } from 'src/components/form/formBuilder/FormBuilder'
import { categorySchema } from 'src/constants/formSchema/product'
import { categoryData } from 'src/constants/data/product.constant'
import { IBrandModel } from 'src/interfaces/product.interface'
import { useProductService } from 'src/service/product.service'
import { useEffect, useState } from 'react'
import { Error } from 'src/components/generic/error'

export const CreateCategory = () => {
  const [state, setState] = useState(categoryData)

  const { createCategory, isLoading, getCategory, updateCategory, error } =
    useProductService()

  const navigate = useNavigate()
  const { categoryId } = useParams()

  const onChange = async (data: IBrandModel) => {
    setState(data)
  }

  const onFormSubmit = async () => {
    if (!categoryId) {
      const res = await createCategory(state)
      if (res) {
        navigate(`/admin/${adminInventoryUrls.category.main}/edit/${res?.id}`)
      }
    } else {
      const res = await updateCategory(categoryId, state)
      if (res) {
        setState(res)
      }
    }
  }

  useEffect(() => {
    if (categoryId) {
      getCategory(categoryId).then((category) => {
        if (category) {
          setState(category)
        }
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId])

  const breadcrumbs = [
    { title: 'Inventory' },
    { title: 'Category', link: `/admin/${adminInventoryUrls.category.main}` },
  ]

  if (categoryId) {
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
          <Link to={`/admin/${adminInventoryUrls.category.main}`}>
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
            {categoryId ? 'Update' : 'Create'}
          </Button>
        ),
      }}
    >
      <Error error={error} />
      <FormBuilder schema={categorySchema} value={state} onChange={onChange} />
    </PageWrapper>
  )
}
