import { ProductCard, SideBarProductFilter } from '../components'
import { useProductListingContext } from '../contexts/ProductListingContext'

const filterList = (list, rating, price, stock, delivery) => {
  return list
    .filter((item) => item.rating.stars >= rating)
    .filter((item) => item.price.discounted <= price)
    .filter((item) => (stock ? true : item))
    .filter((item) => (delivery ? item : true))
}

function ProductListingPage() {
  const {
    state: {
      productsList,
      rating,
      price,
      includeOutOfStock,
      oneDayDeliveryOnly,
    },
  } = useProductListingContext()

  const filteredList = filterList(
    productsList,
    rating,
    price.maximum,
    includeOutOfStock,
    oneDayDeliveryOnly
  )

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
