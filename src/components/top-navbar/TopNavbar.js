import * as icons from '../../assets/icons'
import { useCartContext } from '../cart/CartContext'

function TopNavbar({ changeRoute }) {
  const {
    state: { cartList },
  } = useCartContext()

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
        </button>
        <button
          type="button"
          className="button button-icon top-navbar-icon top-navbar-cart-button"
          onClick={() => changeRoute('cart')}
        >
          <icons.IcRoundShoppingCart />
          {cartList.length > 0 && (
            <span className="badge-cart-button flex-center">
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
