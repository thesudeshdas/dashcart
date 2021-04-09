import { Route, Routes } from 'react-router'
import './App.css'
import { TopNavbar } from './components/index'
import { ProductListingPage, WishlistPage, CartPage } from './pages/index'

function App() {
  return (
    <>
      <TopNavbar />

      <Routes>
        <Route path="/" element={<ProductListingPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App
