import { useSearchParams } from 'react-router-dom'

import classes from './productSearch.module.css'
import { useEffect, useState } from 'react'
import { useProductService } from 'src/service/product.service'
import { IProductModel } from 'src/interfaces/product.interface'
import { ProductCard1 } from 'src/components/dynamicComponents/productCard'
import { Grid } from '@mui/material'

const ProductSearch: React.FC = () => {
  const [products, setProducts] = useState<IProductModel[]>([])

  const [searchParams] = useSearchParams()
  const searchWord = searchParams.get('search')
  const brandWord = searchParams.get('brand')

  const { getProductsList } = useProductService()

  useEffect(() => {
    const searchQuery = {
      search: searchWord ?? '',
      brand: brandWord ?? '',
    }
    getProductsList(new URLSearchParams(searchQuery).toString()).then(
      (result) => {
        if (result) {
          setProducts(result)
        }
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord, brandWord])

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product.id}>
            <ProductCard1 {...product} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProductSearch
