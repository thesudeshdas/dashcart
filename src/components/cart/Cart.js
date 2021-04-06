import { useCartContext } from './CartContext'
import * as icons from '../../assets/icons'
import QuantityAction from '../quantity-action/QuantityAction'
import CartItemCard from '../cards/CartItemCard'

function Cart() {
  const {
    state: { cartList },
    dispatch: cartDispatch,
  } = useCartContext()

  return (
    <>
      <h1>Shopping Cart</h1>
      <div>
        {cartList.map((product, index) => (
          <CartItemCard product={product} />
        ))}
      </div>
    </>
  )
}

export default Cart
