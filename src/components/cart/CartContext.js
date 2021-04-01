/* eslint-disable import/prefer-default-export */
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartList, setCartList] = useState([
    // {
    //   id: 4,
    //   name: {
    //     text: 'Adidas Football UCl Finale 20 League Ball',
    //   },
    //   brand: { text: 'Adidas' },
    //   description: {
    //     text: `The stars are the star on this adidas UCL Finale 20 League Ball. Its dynamic graphics are inspired by the design of the UEFA Champions League official match football. Made for training and matches, it's seamless and FIFA certified to ensure sparkling performances on the pitch.`,
    //   },
    //   price: { original: 2799, discounted: 1959, discount: 30 },
    //   images: [
    //     {
    //       url:
    //         'https://content.adidas.co.in/static/Product-FS0256/adidas_FS0256_1.jpg.zoom',
    //       altText: 'Football by Adidas',
    //       priority: 0,
    //     },
    //   ],
    //   categories: [{ type: 'football' }],
    //   rating: { stars: 3 },
    //   link: { url: 'https://shop.adidas.co.in/#!product/FS0256_fin20lge' },
    //   quantity: 2,
    // },
    // {
    //   id: 5,
    //   name: {
    //     text: 'Nike Premier League Pitch Football',
    //   },
    //   brand: { text: 'Nike' },
    //   description: {
    //     text: `Celebrate the top flight of English football with the Premier League Pitch Football. It has a smooth casing with high-contrast graphics making it easy to track across the pitch.`,
    //   },
    //   price: { original: 1495, discounted: 1495, discount: 30 },
    //   images: [
    //     {
    //       url:
    //         'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/9942f178-df61-4550-b85e-657deee14a3c/premier-league-pitch-football-sJh7Fg.jpg',
    //       altText: 'Football by Nike',
    //       priority: 0,
    //     },
    //   ],
    //   rating: { stars: 2 },
    //   categories: [{ type: 'football' }],
    //   link: {
    //     url:
    //       'https://www.nike.com/in/t/premier-league-pitch-football-sJh7Fg/CQ7151-420',
    //   },
    //   quantity: 1,
    // },
  ])

  return (
    <CartContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext)
}
