import * as icons from '../../assets/icons'
import QuantityAction from '../quantity-action/QuantityAction'
import Rating from '../rating/Rating'
import { useCartContext } from '../../contexts/CartContext'
import { useWishlistContext } from '../../contexts/WishlistContext'

function ProductCard({ product }) {
  const {
    state: { cartList },
    dispatch: cartDispatch,
  } = useCartContext()

  const {
    state: { wishlist },
    dispatch: wishlistDispatch,
  } = useWishlistContext()

  return (
    <div key={product.id} className="card card-product-horizontal">
      <div className="card-product-container-image flex-center">
        <img
          className="card-product-image"
          src={product.images[0].url}
          alt={product.images[0].altText}
        />

        {wishlist.find((item) => item.id === product.id) ? (
          <button
            type="button"
            className="buton button-icon card-product-wishlist"
            onClick={() =>
              wishlistDispatch({
                type: 'DELETE_FROM_WISHLIST',
                payload: product,
              })
            }
          >
            <icons.IcRoundFavorite />
          </button>
        ) : (
          <button
            type="button"
            className="buton button-icon card-product-wishlist"
            onClick={() =>
              wishlistDispatch({
                type: 'ADD_TO_WISHLIST',
                payload: product,
              })
            }
          >
            <icons.IcRoundFavoriteBorder />
          </button>
        )}
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

        {
          // Refactor to change this filter, using a better approach
          cartList.filter((item) => item.id === product.id).length > 0 ? (
            <div className="product-listing-quantity-action">
              <QuantityAction
                product={cartList.filter((item) => item.id === product.id)[0]}
              />
            </div>
          ) : (
            <button
              type="button"
              className="button button-primary card-product-primary-button"
              onClick={() =>
                cartDispatch({ type: 'ADD_TO_CART', payload: product })
              }
            >
              <div className="cart-product-primary-button-icon">
                <icons.IcRoundShoppingCart />
              </div>
              Add to Cart
            </button>
          )
        }
      </div>
    </div>
  )
}

export default ProductCard
