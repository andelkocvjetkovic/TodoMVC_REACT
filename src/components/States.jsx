import RadioState from "./RadioState";
import "./States.scss";

function States({ activeState, setActiveState, allStates }) {
  function handleChangeStatus(e) {
    setActiveState(e.target.value);
  }
  return (
    <div className="States" onChange={handleChangeStatus}>
      {allStates.map((state) => {
        return (
          <RadioState
            key={state}
            value={state}
            checked={state == activeState}
          ></RadioState>
        );
      })}
    </div>
  );
}

export default States;
