import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductCarousel } from 'src/components/generic/productCarousel'
import { IProductModel } from 'src/interfaces/product.interface'
import { useProductService } from 'src/service/product.service'
import { useConfigStore } from 'src/store/config.store'

export const ProductPage: React.FC = () => {
  const { productId } = useParams()

  const [theme] = useConfigStore((state) => [state.theme])
  const [variant] = useState(0)

  const [product, setProduct] = useState<IProductModel>()

  const { getProduct } = useProductService()

  useEffect(() => {
    if (productId) {
      getProduct(productId).then((product) => {
        if (product) {
          setProduct(product)
        } else {
          // TODO show not available
        }
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId])

  const images = product?.images ?? product?.variants?.[variant]?.images

  return (
    <div className={` ${theme?.name ?? ''} container`}>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <ProductCarousel images={images ?? []} />
        </Grid>
        <Grid item xs={12} lg={6}>
          {/* Product details */}
        </Grid>
      </Grid>
    </div>
  )
}
