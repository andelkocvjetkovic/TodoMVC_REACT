import "./Input.scss";
function Input({ placeholder = "Whats needs to be done?" }) {
  return (
    <p className="Input">
      <label htmlFor="new-todo" className="Input__label">
        New todo
      </label>
      <input
        id="new-todo"
        name="new-todo"
        type="text"
        className="Input__input"
        autoComplete="off"
        placeholder={placeholder}
      />
    </p>
  );
}

export default Input;
