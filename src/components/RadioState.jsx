import "./RadioState.scss";
function RadioState({ value, checked }) {
  return (
    <p className="RadioState">
      <input
        className="RadioState__input"
        type="radio"
        id={value}
        value={value}
        name={value}
        readOnly
        checked={checked}
      />
      <label className="RadioState__label" htmlFor={value}>
        {value}
      </label>
    </p>
  );
}

export default RadioState;
