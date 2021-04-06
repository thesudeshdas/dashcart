import { useState } from 'react'
import productData from '../database/productData'
import * as icons from '../assets/icons'
import { useCartContext } from '../contexts/CartContext'
import { useWishlistContext } from '../contexts/WishlistContext'
import { ProductCard } from '../components'

function ProductListingPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [productList, setProductList] = useState(productData)
  const {
    state: { cartList },
    dispatch: cartDispatch,
  } = useCartContext()

  const {
    state: { wishlist },
    dispatch: wishlistDispatch,
  } = useWishlistContext()

  const caalFunc = () => <h1>Hello</h1>

  return (
    <div>
      {isLoading && (
        <h1>
          Finding the best stuff for you
          <icons.IonLoadA />
        </h1>
      )}

      <div className="container-card">
        {productList.map((product, index) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductListingPage
