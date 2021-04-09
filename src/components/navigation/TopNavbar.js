import { Link } from 'react-router-dom'
import * as icons from '../../assets/icons'
import { useCartContext } from '../../contexts/CartContext'
import { useWishlistContext } from '../../contexts/WishlistContext'

function TopNavbar() {
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
      <Link to="/">
        <button type="button" className="top-navbar-button-brand">
          Dashcart
        </button>
      </Link>
      <div className="spacer" />

      <div className="top-navbar-actions">
        <Link to="/wishlist">
          <button type="button" className="button button-icon top-navbar-icon">
            <icons.IcRoundFavorite />
            {wishlist.length > 0 && (
              <span className="badge badge-on-button-icon flex-center top-navbar-badge-on-button">
                {wishlist.length}

                {/* changin the quantity at top of the navabr */}
                {/* {cartList.reduce((acc, cur) => acc.quantity + cur)} */}
              </span>
            )}
          </button>
        </Link>
        <Link to="/cart">
          <button type="button" className="button button-icon top-navbar-icon">
            <icons.IcRoundShoppingCart />
            {cartList.length > 0 && (
              <span className="badge badge-on-button-icon flex-center top-navbar-badge-on-button">
                {cartList.length}

                {/* changin the quantity at top of the navabr */}
                {/* {cartList.reduce((acc, cur) => acc.quantity + cur)} */}
              </span>
            )}
          </button>
        </Link>
      </div>
    </nav>
  )
}
export default TopNavbar
