import './App.css';
import { combineReducers, createStore } from "redux";
import { counter } from "./counter";
import { Provider } from "react-redux";
import CounterRedux from "./CounterRedux";
import CounterReduxReducer from "./CounterReduxReducer";

const reducer = combineReducers({counter})

const store = createStore(reducer);

function App() {
  return (
    
    <Provider store={store}>
      <>
        <CounterRedux />
        <CounterReduxReducer />
        <CounterReduxReducer />
        <CounterRedux />
      </>
    </Provider>
    
  );
}
export default App;
