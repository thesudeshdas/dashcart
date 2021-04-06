import { useState } from 'react'

function InputSlider() {
  const [value, setValue] = useState(10)

  const handleSlider = (event) => {
    setValue(event.target.value)
  }

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
