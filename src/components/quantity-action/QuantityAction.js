import * as icons from '../../assets/icons'
import { useCartContext } from '../cart/CartContext'

function QuantityAction({ product }) {
  const { dispatch: cartDispatch } = useCartContext()

  return (
    <div className="card-cart-item-container-quantity flex-center">
      {product.quantity > 1 ? (
        <button
          type="button"
          className="button button-icon card-cart-item-quantity-action"
          onClick={() =>
            cartDispatch({
              type: 'DECREASE_QUANTITY_IN_CART',
              payload: product,
            })
          }
        >
          <icons.IcRoundMinus />
        </button>
      ) : (
        <button
          type="button"
          className="button button-icon card-cart-item-quantity-action"
          onClick={() =>
            cartDispatch({ type: 'DELETE_FROM_CART', payload: product })
          }
        >
          <icons.IcRoundDelete />
        </button>
      )}

      <div className="card-cart-item-quantity">{product.quantity}</div>
      <button
        type="button"
        className="button button-icon card-cart-item-quantity-action"
        onClick={() =>
          cartDispatch({ type: 'INCREASE_QUANTITY_IN_CART', payload: product })
        }
      >
        <icons.IcRoundPlus />
      </button>
    </div>
  )
}

export default QuantityAction
