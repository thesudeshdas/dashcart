import { WishlistItemCard } from '../components'
import { useCartContext } from '../contexts/CartContext'
import { useWishlistContext } from '../contexts/WishlistContext'

function WishlistPage() {
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

export default WishlistPage
