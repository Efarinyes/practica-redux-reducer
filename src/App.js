import { createStore } from "redux";
import { counter } from "./counter";
import { Provider } from "react-redux";
import CounterRedux from "./CounterRedux";
import CounterReduxReducer from "./CounterReduxReducer";

const store = createStore(counter, 0);

function App() {
  return (
    <Provider store={store}>
      <>
        <CounterRedux />
        <CounterReduxReducer />
        <CounterReduxReducer />
      </>
    </Provider>
  );
}
export default App;
