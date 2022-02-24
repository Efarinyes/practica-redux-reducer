import CounterReduxReducer from "./CounterReduxReducer";
import { createStore } from "redux";
import { counter, increment } from "./counter";

const store = createStore(counter, 0);
store.dispatch(increment(+1));
console.log("state", store.getState());

function App() {
  return (
    <>
      <CounterReduxReducer />
      <CounterReduxReducer />
    </>
  );
}
export default App;
