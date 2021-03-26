import * as icons from '../../assets/icons'

function TopNavbar({ changeRoute }) {
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
          className="button button-icon top-navbar-icon"
          onClick={() => changeRoute('cart')}
        >
          <icons.IcRoundShoppingCart />
        </button>
      </div>
    </nav>
  )
}
export default TopNavbar
