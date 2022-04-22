import React, { useCallback, useEffect } from "react";
import { useAnimalContext } from "../helpers/AnimalContext";
import { useAnimalPriceContext } from "../helpers/context/AnimalPriceContext";
import TradeButton from "./TradeButton";
import AnimalButton from "./AnimalButton";

const AnimalList = () => {
  const { animalList, animalDispatch } = useAnimalContext();
  const { AnimalPriceState, increment, decrement, remove } =
    useAnimalPriceContext();
  const mockData = {
    name: "no-names",
    dmg: 0.212121213,
  };

  // useEffect(() => {
  //   console.log(animalList.length);
  // }, [animalList]);

  // const _remove = useCallback((value) => {
  //   remove(value);
  // }, []);

  return (
    <>
      <div>My Animal List...</div>
      <br />
      {animalList.map((e, i) => {
        return <AnimalButton key={i} name={e.name} dmg={e.dmg} />;
      })}
      <button
        style={{ color: "red" }}
        onClick={() => {
          animalDispatch({ type: "ADD_NEW", data: mockData });
        }}
      >
        Add Animal
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          animalDispatch({ type: "CLEAN_UP" });
        }}
      >
        Clean Up Animal
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          animalDispatch({ type: "ROLL_BACK" });
        }}
      >
        Roll Back Animal
      </button>
      <br />
      <h2>Animal Price</h2>
      {AnimalPriceState.map((e, i) => {
        return <TradeButton value={e} remove={remove} key={i} />;
      })}
      <br />
      <button
        onClick={() => {
          increment(10);
        }}
        style={{ color: "green" }}
      >
        Trade 10
      </button>
      <button
        onClick={() => {
          increment(20);
        }}
        style={{ color: "green" }}
      >
        Trade 20
      </button>
      <button
        onClick={() => {
          decrement(10);
        }}
        style={{ color: "red" }}
      >
        Trade -10
      </button>
    </>
  );
};

export default AnimalList;
