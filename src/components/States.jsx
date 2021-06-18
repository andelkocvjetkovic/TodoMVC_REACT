import StateButton from "./StateButton";
import "./States.scss";
const STATES = ["All", "Active", "Completed", "Urgent"];
function States() {
  return (
    <div className="States">
      {STATES.map((state) => {
        return <StateButton key={state}>{state}</StateButton>;
      })}
    </div>
  );
}

export default States;
