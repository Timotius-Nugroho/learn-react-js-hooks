import { createContext, useContext, useReducer, useCallback } from "react";
import { INCREMENT, DECREMENT, REMOVE } from "../types";
import {
  AnimalPriceReducer,
  initialState,
} from "../reducer/AnimalPriceReducer";

const AnimalPriceContext = createContext(null);

function AnimalPriceProvider(props) {
  const [AnimalPriceState, AnimalPriceDispatch] = useReducer(
    AnimalPriceReducer,
    initialState
  );

  const increment = (trade) =>
    AnimalPriceDispatch({ type: INCREMENT, payload: trade });
  const decrement = (trade) =>
    AnimalPriceDispatch({ type: DECREMENT, payload: trade });
  const remove = useCallback(
    (trade) => AnimalPriceDispatch({ type: REMOVE, payload: trade }),
    []
  );
  // const remove = (trade) =>
  //   AnimalPriceDispatch({ type: REMOVE, payload: trade });

  return (
    <AnimalPriceContext.Provider
      value={{ AnimalPriceState, increment, decrement, remove }}
      {...props}
    />
  );
}

function useAnimalPriceContext() {
  const context = useContext(AnimalPriceContext);
  if (context === undefined) {
    throw new Error(
      "useAnimalContext must be used within a AnimalPriceContextProvider"
    );
  }
  return context;
}

export { AnimalPriceProvider, useAnimalPriceContext };
