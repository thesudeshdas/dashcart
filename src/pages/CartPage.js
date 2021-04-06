import { useCartContext } from '../contexts/CartContext'
import { CartItemCard } from '../components/index'

function CartPage() {
  const {
    state: { cartList },
  } = useCartContext()

  return (
    <>
      <h1>Shopping Cart</h1>
      <div>
        {cartList.map((product) => (
          <CartItemCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default CartPage
