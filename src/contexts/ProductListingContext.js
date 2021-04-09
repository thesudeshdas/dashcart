import { createContext, useContext, useReducer } from 'react'
import productData from '../database/productData'

const ProductListingContext = createContext()

export function ProductListingProvider({ children }) {
  const initialState = {
    productsList: productData,
    price: {
      maximum: Number(
        Math.max(...productData.map((item) => item.price.discounted))
      ),
      mininum: 0,
    },
    rating: 1,
    includeOutOfStock: true,
    oneDayDeliveryOnly: false,
  }

  const productListingReducer = (state, action) => {
    switch (action.type) {
      case 'FILTER_BY_RATING':
        return {
          ...state,
          rating: action.payload,
        }
      case 'FILTER_BY_PRICE':
        return {
          ...state,
          price: { ...state.price, maximum: action.payload },
        }

      case 'TOGGLE_ONE_DAY_DELIVERY':
        return {
          ...state,
          oneDayDeliveryOnly: !state.oneDayDeliveryOnly,
        }

      case 'TOGGLE_OUT_OF_STOCK':
        return {
          ...state,
          includeOutOfStock: !state.includeOutOfStock,
        }

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(productListingReducer, initialState)

  return (
    <ProductListingContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductListingContext.Provider>
  )
}

export function useProductListingContext() {
  return useContext(ProductListingContext)
}
