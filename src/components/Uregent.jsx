import PropTypes from "prop-types";
import Checkbox from "./Checkbox";
import "./Uregent.scss";
function Uregent({
  isUrgent = false,
  onChange = () => {},
  disabled,
  className = "",
  id,
}) {
  return (
    <p className={`Uregent ${className}`.trim()} onChange={onChange}>
      <label htmlFor={id} className="Uregent__label">
        Uregent
      </label>
      <Checkbox id={id} disabled={disabled} defaultChecked={isUrgent} />
    </p>
  );
}
Uregent.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Uregent;
