import { useState } from 'react'
import { useProductListingContext } from '../../contexts/ProductListingContext'

function InputSlider() {
  const {
    state: { productsList },
    dispatch: productListingDispatch,
  } = useProductListingContext()

  const handleSlider = (event) => {
    productListingDispatch({
      type: 'FILTER_BY_PRICE',
      payload: Number(event.target.value),
    })
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
