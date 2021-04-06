import * as icons from '../../assets/icons'
import WishlistItemCard from '../cards/WishlistItemCard'
import { useCartContext } from '../cart/CartContext'
import { useWishlistContext } from './WishlistContext'

function Wishlist() {
  const {
    state: { wishlist },
    dispatch: wishlistDispatch,
  } = useWishlistContext()

  const { dispatch: cartDispatch } = useCartContext()

  return (
    <>
      <h1>This is Wishlist</h1>
      <div className="container-wishlist-item">
        {wishlist.map((product) => (
          <WishlistItemCard product={product} />
        ))}
      </div>
    </>
  )
}

export default Wishlist
