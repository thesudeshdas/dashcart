import * as icons from '../../assets/icons'

function TopNavigationbar({ changeRoute }) {
  return (
    <div className="container-navbar">
      <nav className="navbar">
        <h1 onClick={() => changeRoute('products')}>DashCart</h1>
        <div className="container-desktop-menu">
          <ul>
            <li onClick={() => changeRoute('products')}>Products</li>
            <li onClick={() => changeRoute('wishlist')}>
              <icons.IcRoundFavorite />
            </li>
            <li onClick={() => changeRoute('cart')}>
              <icons.IcRoundShoppingCart />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default TopNavigationbar
