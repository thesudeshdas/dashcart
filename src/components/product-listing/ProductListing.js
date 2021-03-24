/* eslint-disable no-shadow */
import { useState } from 'react'
import * as icons from '../../assets/icons'
import productData from '../../database/productData'
import { useCartContext } from '../cart/CartContext'

function ProductListing() {
  const [isLoading, setIsLoading] = useState(false)
  const [productList, setProductList] = useState(productData)
  const { cartList, setCartList } = useCartContext()

  const addToCart = (product) => {
    setCartList((cartList) =>
      cartList.filter((item) => item.id !== product.id).concat(product)
    )
  }

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
          <div key={product.id} className="card">
            <div className="details-product">
              <div className="product-name">{product.name.text}</div>
              <div className="product-price">
                Rs. {product.price.discounted}
              </div>
              <div className="container-button">
                <button type="button" className="button-wishlist">
                  <icons.IonHeart />
                </button>
                <button
                  type="button"
                  className="button-add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  <div className="icon-cart">
                    <icons.IonCart />
                  </div>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductListing
