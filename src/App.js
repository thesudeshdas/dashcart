import { useState } from 'react'
import './App.css'
import { TopNavbar } from './components/index'
import { ProductListingPage, WishlistPage, CartPage } from './pages/index'

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
        <CartPage />
      ) : null}
    </>
  )
}

export default App
