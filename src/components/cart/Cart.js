import { useCartContext } from './CartContext'
import * as icons from '../../assets/icons'
import QuantityAction from '../quantity-action/QuantityAction'

function Cart() {
  const { cartList, setCartList } = useCartContext()

  const deleteFromCart = (product) => {
    setCartList((prevCartList) =>
      prevCartList.filter((item) => item.id !== product.id)
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
                  <QuantityAction product={product} />
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
              <QuantityAction product={product} />
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
