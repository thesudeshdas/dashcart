import { useState } from 'react'
import { useProductListingContext } from '../../contexts/ProductListingContext'

function InputSlider() {
  const [value, setValue] = useState(10)

  const handleSlider = (event) => {
    setValue(event.target.value)
  }

  const {
    state: { productsList },
    dispatch: productListingDispatch,
  } = useProductListingContext()

  return (
    <input
      className="input-slider"
      type="range"
      min="1"
      max="100"
      onChange={handleSlider}
    />
  )
}

export default InputSlider
