import { createContext, useContext, useReducer } from 'react'
import { useCartContext } from './CartContext'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const { dispatch: cartDispatch } = useCartContext()

  const initialState = {
    wishlist: [],
  }

  const wishlistReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_WISHLIST':
        return {
          ...state,
          wishlist: [
            ...state.wishlist.filter((item) => item.id !== action.payload.id),
            action.payload,
          ],
        }
      case 'DELETE_FROM_WISHLIST':
        return {
          ...state,
          wishlist: state.wishlist.filter(
            (item) => item.id !== action.payload.id
          ),
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(wishlistReducer, initialState)

  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlistContext() {
  return useContext(WishlistContext)
}
