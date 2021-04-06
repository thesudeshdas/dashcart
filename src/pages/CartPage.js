import { useCartContext } from '../contexts/CartContext'
import { CartItemCard } from '../components/index'

function CartPage() {
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

export default CartPage
