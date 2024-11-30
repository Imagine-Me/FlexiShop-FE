import { Link, useNavigate, useParams } from 'react-router-dom'
import { PageWrapper } from '../../Landing/PageWrapper'
import { Button, CircularProgress } from '@mui/material'
import { adminInventoryUrls } from 'src/constants/routes.constant'
import { FormBuilder } from 'src/components/form/formBuilder/FormBuilder'
import { tagSchema } from 'src/constants/formSchema/product'
import { categoryData } from 'src/constants/data/product.constant'
import { IBrandModel } from 'src/interfaces/product.interface'
import { useProductService } from 'src/service/product.service'
import { useEffect, useState } from 'react'
import { Error } from 'src/components/generic/error'

export const CreateTag = () => {
  const [state, setState] = useState(categoryData)

  const { createTag, isLoading, getTag, updateTag, error } = useProductService()

  const navigate = useNavigate()
  const { tagId } = useParams()

  const onChange = async (data: IBrandModel) => {
    setState(data)
  }

  const onFormSubmit = async () => {
    if (!tagId) {
      const res = await createTag(state)
      if (res) {
        navigate(`/admin/${adminInventoryUrls.tags.main}/edit/${res?.id}`)
      }
    } else {
      const res = await updateTag(tagId, state)
      if (res) {
        setState(res)
      }
    }
  }

  useEffect(() => {
    if (tagId) {
      getTag(tagId).then((tag) => {
        if (tag) {
          setState(tag)
        }
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tagId])

  const breadcrumbs = [
    { title: 'Inventory' },
    { title: 'Tag', link: `/admin/${adminInventoryUrls.tags.main}` },
  ]

  if (tagId) {
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
          <Link to={`/admin/${adminInventoryUrls.tags.main}`}>
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
            {tagId ? 'Update' : 'Create'}
          </Button>
        ),
      }}
    >
      <Error error={error} />
      <FormBuilder schema={tagSchema} value={state} onChange={onChange} />
    </PageWrapper>
  )
}
