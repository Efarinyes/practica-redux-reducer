
import { useReducer } from "react";
import { counter, increment, reset } from "./counter";

function CounterReduxReducer() {
  const [count, dispatch] = useReducer(counter, 0);

  return (
   
    <div className="App">
      <h1> Comptador Reducer</h1>
      <div> {count} </div>
      <button onClick={() => dispatch(increment(+1))}>+1</button>
      <button onClick={() => dispatch(reset())}>Resseteja</button>
      <button onClick={() => dispatch(increment(-1))}>-1</button>
    </div>
   
  );
}
export default CounterReduxReducer;
