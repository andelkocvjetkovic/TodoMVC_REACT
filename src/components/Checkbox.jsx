import "./Checkbox.scss";
function Checkbox({ isUrgent = false }) {
  return (
    <p className="Checkbox" onClick={(e) => e.stopPropagation()}>
      <label htmlFor="urgent" className="Checkbox__label">
        Uregent
      </label>
      <input
        type="checkbox"
        name="urgent"
        id="urgent"
        defaultChecked={isUrgent}
        className="Checkbox__checkbox"
      />
    </p>
  );
}

export default Checkbox;
