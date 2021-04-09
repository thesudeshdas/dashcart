import { useState } from 'react'
import { useProductListingContext } from '../../contexts/ProductListingContext'

function InputCheckboxes({ option, dispatchType }) {
  const [value, setValue] = useState(false)

  const { dispatch: productListingDispatch } = useProductListingContext()

  const changeHandler = (event) => {
    setValue((prevValue) => !prevValue)
    // console.log({ value })
    productListingDispatch({
      type: dispatchType,
      payload: !value,
    })
  }

  // console.log({ option, dispatchType })

  return (
    <div key={option.length} className="InputCheckbox">
      <input
        type="checkbox"
        name={option}
        value={value}
        onChange={changeHandler}
      />{' '}
      {option}
    </div>
  )
}

export default InputCheckboxes
