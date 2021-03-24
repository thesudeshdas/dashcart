import { useCartContext } from './CartContext'

function Cart() {
  const { cartList, setCartList } = useCartContext()

  return (
    <>
      <h1>This is Cart CartComponent</h1>
      <ul>
        {cartList.map((item) => (
          <li>{item.name.text}</li>
        ))}
      </ul>
    </>
  )
}

export default Cart
