import { createContext, useState, useEffect, useContext } from "react";

const ADD_NEW = "ADD_NEW";
const CLEAN_UP = "CLEAN_UP";
const ROLL_BACK = "ROLL_BACK";
const AnimalContext = createContext(null);

function AnimalProvider(props) {
  const [animalList, setAnimalList] = useState([]);

  const animalDispatch = (action) => {
    const { type, data } = action;

    switch (type) {
      case ADD_NEW:
        setAnimalList([...animalList, data]);
        break;

      case ROLL_BACK:
        let newAnimalList = animalList;
        newAnimalList.pop();
        setAnimalList([...newAnimalList]);
        break;

      case CLEAN_UP:
        setAnimalList([]);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimalList([
        { name: "zbra", dmg: 90 },
        { name: "frog", dmg: 100 },
        { name: "dog", dmg: 900 },
        { name: "ant", dmg: 30 },
      ]);
    }, 1000);
    console.log("[ANIMAL CONTEXT] get init list..");
  }, []);

  return (
    <AnimalContext.Provider value={{ animalList, animalDispatch }} {...props} />
  );
}

function useAnimalContext() {
  const context = useContext(AnimalContext);
  if (context === undefined) {
    throw new Error(
      "useAnimalContext must be used within a AnimalContextProvider"
    );
  }
  return context;
}

export { AnimalProvider, useAnimalContext };
