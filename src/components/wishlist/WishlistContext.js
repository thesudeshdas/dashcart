import { createContext, useContext, useReducer } from 'react'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const initialState = {
    wishlist: [
      {
        id: 1,
        name: { text: 'Adidas Uniforia Football' },
        brand: { text: 'Adidas' },
        description: {
          text: `12 hosts, 24 national teams. A celebration of soccer and culture. A continent united. Made for training and kickabouts, this adidas Uniforia football shows off a bold design based on the one covering the official match ball. Its machine-stitched construction ensures it's always ready to roll. Reflective details helps you head in extra time when the sun goes down.`,
        },
        price: { original: 1999, discounted: 999, discount: 30 },
        images: [
          {
            url:
              'https://content.adidas.co.in/static/Product-FH7353/adidas_FH7353_1.jpg',
            altText: 'Football by Adidas',
            priority: 0,
          },
        ],
        categories: [{ type: 'football' }],
        rating: { stars: 3 },
        link: { url: 'https://shop.adidas.co.in/#!product/FH7353_unifotrn' },
      },
    ],
  }

  const wishlistReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_WISHLIST':
        return { ...state, wishlist: [...state.wishlist, action.payload] }
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
