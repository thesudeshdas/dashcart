/* eslint-disable import/prefer-default-export */
import { createContext, useContext, useReducer, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const initialState = {
    cartList: [],
  }
  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartList: [...state.cartList, { ...action.payload, quantity: 1 }],
        }

      case 'DELETE_FROM_CART':
        return {
          ...state,
          cartList: [
            ...state.cartList.filter((item) => item.id !== action.payload.id),
          ],
        }

      case 'DECREASE_QUANTITY_IN_CART':
        return {
          ...state,
          cartList: [
            ...state.cartList.map((item) => {
              if (item.id === action.payload.id) {
                if (item.quantity > 1) {
                  return { ...item, quantity: item.quantity - 1 }
                }
              }
              return item
            }),
          ],
        }

      case 'INCREASE_QUANTITY_IN_CART':
        return {
          ...state,
          cartList: [
            ...state.cartList.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          ],
        }

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext)
}
