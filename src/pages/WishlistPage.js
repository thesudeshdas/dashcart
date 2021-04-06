import { WishlistItemCard } from '../components'
import { useWishlistContext } from '../contexts/WishlistContext'

function WishlistPage() {
  const {
    state: { wishlist },
  } = useWishlistContext()

  return (
    <>
      <h1>This is Wishlist</h1>
      <div className="container-wishlist-item">
        {wishlist.map((product) => (
          <WishlistItemCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default WishlistPage
