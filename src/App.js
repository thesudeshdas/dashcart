
import { useState } from 'react'
import './App.css'
import { Cart, TopNavbar, Wishlist } from './components/index'
import { ProductListingPage, WishlistPage } from './pages/index'

function App() {
  const [route, setRoute] = useState('products')

  const handleRouteChange = (childData) => setRoute(childData)

  return (
    <>
      <TopNavbar changeRoute={handleRouteChange} />

      {route === 'products' ? (
        <ProductListingPage />
      ) : route === 'wishlist' ? (
        <WishlistPage />
      ) : route === 'cart' ? (
        <Cart />
      ) : null}
    </>
  )
}

export default App
