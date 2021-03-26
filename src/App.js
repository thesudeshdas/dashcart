/* eslint-disable no-nested-ternary */
import { useState } from 'react'
import './App.css'
import { Cart, ProductListing, TopNavbar, Wishlist } from './components/index'

function App() {
  const [route, setRoute] = useState('products')

  const handleRouteChange = (childData) => setRoute(childData)

  return (
    <>
      <TopNavbar changeRoute={handleRouteChange} />

      {route === 'products' ? (
        <ProductListing />
      ) : route === 'wishlist' ? (
        <Wishlist />
      ) : route === 'cart' ? (
        <Cart />
      ) : null}
    </>
  )
}

export default App
