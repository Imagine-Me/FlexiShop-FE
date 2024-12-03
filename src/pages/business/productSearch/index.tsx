import { useSearchParams } from 'react-router-dom'

const ProductSearch: React.FC = () => {
  const [searchParams] = useSearchParams()
  const searchWord = searchParams.get('search')
  return 'Product Search - ' + searchWord
}

export default ProductSearch
