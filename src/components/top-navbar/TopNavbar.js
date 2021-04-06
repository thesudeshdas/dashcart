import * as icons from '../../assets/icons'
import Wishlist from '../wishlist/Wishlist'
import { useCartContext } from '../../contexts/CartContext'
import { useWishlistContext } from '../../contexts/WishlistContext'

function TopNavbar({ changeRoute }) {
  const {
    state: { cartList },
  } = useCartContext()
  const {
    state: { wishlist },
  } = useWishlistContext()

  return (
    <nav className="top-navbar">
      <div className="top-navbar-mobile-menu">
        <icons.IcRoundMenu />
      </div>
      <button
        type="button"
        className="top-navbar-button-brand"
        onClick={() => changeRoute('products')}
      >
        Dashcart
      </button>

      <div className="spacer" />

      <div className="top-navbar-actions">
        <button
          type="button"
          className="button button-icon top-navbar-icon"
          onClick={() => changeRoute('wishlist')}
        >
          <icons.IcRoundFavorite />
          {wishlist.length > 0 && (
            <span className="badge badge-on-button-icon flex-center top-navbar-badge-on-button">
              {cartList.length}

              {/* changin the quantity at top of the navabr */}
              {/* {cartList.reduce((acc, cur) => acc.quantity + cur)} */}
            </span>
          )}
        </button>
        <button
          type="button"
          className="button button-icon top-navbar-icon"
          onClick={() => changeRoute('cart')}
        >
          <icons.IcRoundShoppingCart />
          {cartList.length > 0 && (
            <span className="badge badge-on-button-icon flex-center top-navbar-badge-on-button">
              {cartList.length}

              {/* changin the quantity at top of the navabr */}
              {/* {cartList.reduce((acc, cur) => acc.quantity + cur)} */}
            </span>
          )}
        </button>
      </div>
    </nav>
  )
}
export default TopNavbar
