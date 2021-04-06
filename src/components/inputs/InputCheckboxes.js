function InputCheckboxes({ checkboxOptions }) {
  return checkboxOptions.map((item) => (
    <div key={item.length} className="InputCheckbox">
      <input type="checkbox" name={item} value={item} /> {item}
    </div>
  ))
}

export default InputCheckboxes
