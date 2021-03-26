/* eslint-disable no-shadow */
import { useState } from 'react'
import * as icons from '../../assets/icons'
import productData from '../../database/productData'
import { useCartContext } from '../cart/CartContext'
import Rating from '../rating/Rating'

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
          <div className="card card-product-horizontal">
            <div className="card-product-container-image flex-center">
              <img
                className="card-product-image"
                src={product.images[0].url}
                alt={product.images[0].altText}
              />
              <div className="card-product-wishlist">
                <icons.IcRoundFavorite />
              </div>
            </div>
            <div className="card-product-description">
              <div className="card-product-name">{product.name.text}</div>
              <div className="card-product-rating">
                <Rating stars={product.rating.stars} />
              </div>
              <div className="card-product-container-price">
                <div className="card-product-discounted-price">
                  ₹ {product.price.discounted}
                </div>
                <div className="card-product-original-price">
                  ₹ {product.price.original}
                </div>
                <div className="card-product-discount">
                  ( {product.price.discount}% )
                </div>
              </div>
              <button
                type="button"
                className="button button-primary card-product-primary-button"
                onClick={() => addToCart(product)}
              >
                <div className="cart-product-primary-button-icon">
                  <icons.IcRoundShoppingCart />
                </div>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductListing
