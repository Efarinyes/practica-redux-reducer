import "./App.css";

import { increment, reset } from "./counter";
import { useDispatch } from "react-redux";

function CounterRedux() {
  const count = 0;
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Comptador Redux </h1>
      <div> {count} </div>
      <button onClick={() => dispatch(increment(+1))}>+1</button>
      <button onClick={() => dispatch(reset())}>Resseteja</button>
      <button onClick={() => dispatch(increment(-1))}>-1</button>
    </div>
  );
}
export default CounterRedux;
