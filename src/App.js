/* eslint-disable no-nested-ternary */
import { useState } from 'react'
import './App.css'
import { Cart, TopNavbar, Wishlist } from './components/index'
import { ProductListingPage } from './pages'


function App() {
  const [route, setRoute] = useState('products')

  const handleRouteChange = (childData) => setRoute(childData)

  return (
    <>
      <TopNavbar changeRoute={handleRouteChange} />

      {route === 'products' ? (
        <ProductListingPage />
      ) : route === 'wishlist' ? (
        <Wishlist />
      ) : route === 'cart' ? (
        <Cart />
      ) : null}
    </>
  )
}

export default App
