import "./App.css";
import { useReducer } from "react";
import { counter, increment, reset } from "./counter";

function CounterRedux() {
  const [count, dispatch] = useReducer(counter, 0);

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