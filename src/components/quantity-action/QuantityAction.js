import * as icons from '../../assets/icons'
import { useCartContext } from '../cart/CartContext'

function QuantityAction({ product }) {
  const { setCartList } = useCartContext()

  const deleteFromCart = (product) => {
    setCartList((prevCartList) =>
      prevCartList.filter((item) => item.id !== product.id)
    )
  }

  const increaseQuantityInCart = (product) => {
    setCartList((prevCartList) =>
      prevCartList.map((item, index) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQuantityInCart = (product) => {
    setCartList((prevCartList) =>
      prevCartList.map((item, index) => {
        if (item.id === product.id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }
          }
          deleteFromCart(item)
        }
        return item
      })
    )
  }

  console.log({ product })

  return (
    <div className="card-cart-item-container-quantity flex-center">
      <button
        type="button"
        className="button button-icon card-cart-item-quantity-action"
        onClick={() => decreaseQuantityInCart(product)}
      >
        {product.quantity > 1 ? (
          <icons.IcRoundMinus />
        ) : (
          <icons.IcRoundDelete />
        )}
      </button>
      <div className="card-cart-item-quantity">{product.quantity}</div>
      <button
        type="button"
        className="button button-icon card-cart-item-quantity-action"
        onClick={() => increaseQuantityInCart(product)}
      >
        <icons.IcRoundPlus />
      </button>
    </div>
  )
}

export default QuantityAction
