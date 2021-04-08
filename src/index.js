import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { CartProvider } from './contexts/CartContext'
import { WishlistProvider } from './contexts/WishlistContext'
import { ProductListingProvider } from './contexts/ProductListingContext'

ReactDOM.render(
  <React.StrictMode>
    <ProductListingProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </ProductListingProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
