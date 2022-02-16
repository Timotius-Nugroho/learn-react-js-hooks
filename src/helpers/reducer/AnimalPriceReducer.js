import { INCREMENT, DECREMENT, REMOVE } from "../types/index";

const initialState = localStorage.getItem("price")
  ? JSON.parse(localStorage.getItem("price"))
  : [0];

function AnimalPriceReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      localStorage.setItem(
        "price",
        JSON.stringify([...state, payload + state[state.length - 1]])
      );
      return [...state, payload + state[state.length - 1]];
    case DECREMENT:
      localStorage.setItem(
        "price",
        JSON.stringify([...state, state[state.length - 1] - payload])
      );
      return [...state, state[state.length - 1] - payload];
    case REMOVE:
      let newState = state.filter((e) => e !== payload);
      if (newState.length === 0) {
        newState = [0];
      }
      localStorage.setItem("price", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
}

export { initialState, AnimalPriceReducer };
