import productData from '../database/productData'
import { ProductCard, SideBarProductFilter } from '../components'

function ProductListingPage() {
  const productList = productData

  return (
    <div className="page-product-listing">
      <div className="container-sidebar">
        <SideBarProductFilter />
      </div>
      <div className="container-card">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductListingPage
