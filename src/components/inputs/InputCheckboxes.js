import { useProductListingContext } from '../../contexts/ProductListingContext'

function InputCheckboxes({ checkboxOptions }) {
  const { dispatch: productListingDispatch } = useProductListingContext()

  const changeHandler = (event) => {
    console.log(event.target.value)
  }

  return checkboxOptions.map((item) => (
    <div key={item.length} className="InputCheckbox">
      <input
        type="checkbox"
        name={item}
        value={item}
        onChange={changeHandler}
        defaultChecked
      />{' '}
      {item}
    </div>
  ))
}

export default InputCheckboxes
