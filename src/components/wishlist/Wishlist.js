import * as icons from '../../assets/icons'
import { useCartContext } from '../cart/CartContext'
import { useWishlistContext } from './WishlistContext'

function Wishlist() {
  const {
    state: { wishlist },
    dispatch: wishlistDispatch,
  } = useWishlistContext()

  const { dispatch: cartDispatch } = useCartContext()

  return (
    <>
      <h1>This is Wishlist</h1>
      <div>
        {wishlist.map((product) => (
          <div key={product.id} className="card card-wishlist-item">
            <div className="card-wishlist-item-container-image flex-center">
              <img
                className="card-wishlist-image"
                src={product.images[0].url}
                alt="product"
              />
            </div>
            <div className="card-wishlist-item-description">
              <div className="card-product-name wishlist-item-name">
                {product.name.text}
              </div>

              <div className="card-wishlist-item-container-price">
                <div className="wishlist-item-discounted-price">
                  ₹ {product.price.discounted}
                </div>
                <div className="wishlist-item-original-price">
                  ₹ {product.price.original}
                </div>
                <div className="wishlist-item-discount">
                  ({product.price.discount}%)
                </div>
              </div>
              <div className="card-wishlist-item-container-buttons">
                <button
                  type="button"
                  className="button button-secondary card-wishlist-item-delete-button flex-center"
                  onClick={() =>
                    wishlistDispatch({
                      type: 'DELETE_FROM_WISHLIST',
                      payload: product,
                    })
                  }
                >
                  <icons.IcRoundDelete />
                </button>
                <button
                  type="button"
                  className="button button-primary card-wishlist-item-primary-button"
                  onClick={() => {
                    cartDispatch({ type: 'ADD_TO_CART', payload: product })
                    wishlistDispatch({
                      type: 'DELETE_FROM_WISHLIST',
                      payload: product,
                    })
                  }}
                >
                  <div className="cart-product-primary-button-icon">
                    <icons.IcRoundShoppingCart />
                  </div>
                  Move to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Wishlist
