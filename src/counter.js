const INCREMENT = "INCREMENT";
export function increment(amount) {
  return { type: INCREMENT, amount };
}

const RESET = "RESET";
export function reset() {
  return { type: RESET };
}
export function counter(state = 0, action) {
  
  switch (action.type) {
    case "INCREMENT":
      return state + action.amount;
    case "RESET":
      return 0;
    default:
      return state;
  }
}
export function getCount(state) {
  console.log(state)
  return state.counter;
}
