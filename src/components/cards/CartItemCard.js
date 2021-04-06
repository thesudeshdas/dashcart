import QuantityAction from '../quantity-action/QuantityAction'
import { useCartContext } from '../../contexts/CartContext'

function CartItemCard({ product }) {
  const {
    state: { cartList },
    dispatch: cartDispatch,
  } = useCartContext()

  return (
    <div key={product.id} className="card card-cart-item">
      <div className="card-cart-item-container-item">
        <div className="card-cart-container-item-image flex-center">
          <img
            className="card-cart-item-image"
            src={product.images[0].url}
            alt={product.images[0].url}
          />
        </div>
        <div className="card-cart-item-description">
          <div className="card-cart-item-name">{product.name.text}</div>
          <div className="card-cart-item-price">
            ₹ {product.price.discounted}
          </div>
          <div className="card-cart-item-seller">
            Sold by {product.brand.text}
          </div>
          <div className="card-cart-item-actions-desktop">
            <QuantityAction product={product} />
            <button
              type="button"
              className="button button-primary card-cart-item-delete"
              onClick={() =>
                cartDispatch({
                  type: 'DELETE_FROM_CART',
                  payload: product,
                })
              }
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="card-cart-item-actions-mobile">
        <QuantityAction product={product} />
        <button
          type="button"
          className="button button-primary card-cart-item-delete"
          onClick={() =>
            cartDispatch({ type: 'DELETE_FROM_CART', payload: product })
          }
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default CartItemCard
