import { useState } from 'react'
import { useProductListingContext } from '../../contexts/ProductListingContext'
import productData from '../../database/productData'

function InputSlider() {
  const {
    state: { productsList },
    dispatch: productListingDispatch,
  } = useProductListingContext()

  const [value, setValue] = useState(
    Math.max(...productsList.map((item) => item.price.discounted))
  )

  const handleSlider = (event) => {
    setValue(event.target.value)
    productListingDispatch({ type: 'FILTER_BY_PRICE', payload: value })
  }

  return (
    <input
      className="input-slider"
      type="range"
      min={Math.min(...productsList.map((item) => item.price.discounted))}
      max={Math.max(...productsList.map((item) => item.price.discounted))}
      onChange={handleSlider}
    />
  )
}

export default InputSlider
