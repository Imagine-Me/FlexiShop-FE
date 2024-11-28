import { Link } from 'react-router-dom'
import { PageWrapper } from '../../Landing/PageWrapper'
import { Button, Grid } from '@mui/material'
import { AdminUrls } from 'src/constants/routes.constant'
import { FormBuilder } from 'src/components/form/formBuilder/FormBuilder'
import { productSchema } from 'src/constants/formSchema/product'
import { productData } from 'src/constants/data/product.constant'

export const CreateProduct = () => {
  return (
    <PageWrapper
      breadcrumbs={[
        { title: 'Inventory' },
        { title: 'Product' },
        { title: 'Create' },
      ]}
      footer={{
        left: (
          <Link to={`/admin/${AdminUrls.PRODUCT_PAGE}`}>
            <Button>Back</Button>
          </Link>
        ),
        right: <Button variant="contained">Create</Button>,
      }}
    >
      <Grid container spacing={3}>
        <Grid item sm={12} lg={8}>
          <FormBuilder
            schema={productSchema}
            value={productData}
            onChange={console.log}
          />
        </Grid>
        <Grid item sm={12} lg={4}>
          2
        </Grid>
      </Grid>
    </PageWrapper>
  )
}
