import productData from '../database/productData'
import { ProductCard } from '../components'

function ProductListingPage() {
  const productList = productData

  return (
    <div>
      <div className="container-card">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductListingPage
