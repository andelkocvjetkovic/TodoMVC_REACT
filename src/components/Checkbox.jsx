import PropTypes from "prop-types";
import "./Checkbox.scss";
function Checkbox({
  defaultChecked = false,
  id,
  onChange = () => {},
  className = "",
  disabled = false,
}) {
  return (
    <input
      type="checkbox"
      name="urgent"
      id={id}
      onChange={onChange}
      defaultChecked={defaultChecked}
      className={`Checkbox ${className}`.trim()}
      disabled={disabled}
    />
  );
}
Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Checkbox;
