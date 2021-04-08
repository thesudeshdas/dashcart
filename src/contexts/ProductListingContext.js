import { createContext, useContext, useReducer } from 'react'
import productData from '../database/productData'

const ProductListingContext = createContext()

export function ProductListingProvider({ children }) {
  const filterList = (list, rating, price) => {
    return list
      .filter((item) => item.rating.stars >= rating)
      .filter((item) => item.price.discounted <= price)
  }

  const initialState = {
    productsList: productData,
    sortedList: productData,
    filteredList: productData,
    price: {
      maximum: Math.max(...productData.map((item) => item.price.discounted)),
      mininum: Math.min(...productData.map((item) => item.price.discounted)),
    },
    rating: 1,
  }

  const productListingReducer = (state, action) => {
    switch (action.type) {
      case 'FILTER_BY_RATING':
        return {
          ...state,
          rating: action.payload,
          filteredList: filterList(
            state.sortedList,
            action.payload,
            state.price.maximum
          ),
        }
      case 'FILTER_BY_PRICE':
        return {
          ...state,
          price: { ...state.price, maximum: action.payload },
          filteredList: filterList(
            state.sortedList,
            state.rating,
            action.payload
          ),
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
