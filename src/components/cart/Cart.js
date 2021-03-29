import { useCartContext } from './CartContext'
import * as icons from '../../assets/icons'

function Cart() {
  const { cartList, setCartList } = useCartContext()

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

  return (
    <>
      <h1>Shopping Cart</h1>
      <div>
        {cartList.map((product, index) => (
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
                    <div className="card-cart-item-quantity">
                      {product.quantity}
                    </div>
                    <button
                      type="button"
                      className="button button-icon card-cart-item-quantity-action"
                      onClick={() => increaseQuantityInCart(product)}
                    >
                      <icons.IcRoundPlus />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="button button-primary card-cart-item-delete"
                    onClick={() => deleteFromCart(product)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="card-cart-item-actions-mobile">
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
                <div className="card-cart-item-quantity">
                  {product.quantity}
                </div>
                <button
                  type="button"
                  className="button button-icon card-cart-item-quantity-action"
                  onClick={() => increaseQuantityInCart(product)}
                >
                  <icons.IcRoundPlus />
                </button>
              </div>
              <button
                type="button"
                className="button button-primary card-cart-item-delete"
                onClick={() => deleteFromCart(product)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart
