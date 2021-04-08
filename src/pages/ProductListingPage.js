import { ProductCard, SideBarProductFilter } from '../components'
import { useProductListingContext } from '../contexts/ProductListingContext'

function ProductListingPage() {
  const {
    state: { filteredList, brands },
  } = useProductListingContext()

  console.log({ filteredList, brands })

  return (
    <div className="page-product-listing">
      <div className="container-sidebar">
        <SideBarProductFilter />
      </div>
      <div className="container-card">
        {filteredList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductListingPage
