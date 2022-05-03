import React, { useState, useCallback } from "react";
import usePrintStatus from "./customhooks/usePrintStatus";
import useGetListUser from "./customhooks/useGetListUser";
import AnimalList from "./components/AnimalList";
import { AnimalProvider } from "./helpers/AnimalContext";
import { AnimalPriceProvider } from "./helpers/context/AnimalPriceContext";
import UserListComponent from "./components/UserListComponent";
import CountButton from "./components/CountButton";
import AnimationEx from "./components/Animation";
import SideNav from "./components/SideNav";
import RitchTextEditor from "./components/RitchTextEditor";
import DraftJsEditor from "./components/DraftJsEditor";
import BitCustomButton from "./components/BitCustomButton/index";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const statusText = usePrintStatus("Nama saya Timo");
  const { listUsers, addUsers, cleanUplist } = useGetListUser();

  // useEffect(() => {
  //   console.log("cnt", count);
  // }, [count]);

  // useEffect(() => {
  //   console.log(text);
  // }, [text]);

  const _setCount = useCallback(
    () => {
      setCount(count + 1);
      // console.log("CLICKED", count);
    },
    [count] // remove deps "count" to console.log("CLICKED", count); without do setCount and re-render btn
  );

  return (
    <div className="flex">
      <div>
        <SideNav />
      </div>
      <div className="px-5">
        {statusText ? <p>{statusText}</p> : <p>Loading...</p>}
        <p>You clicked {count} times</p>
        <CountButton onclick={_setCount} />
        <input
          placeholder="write down here..."
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        ></input>
        <br />
        <ol>
          {listUsers.map((e, i) => {
            return <UserListComponent key={i} name={e.name} id={e.id} />;
          })}
        </ol>
        <br />
        <button
          style={{ color: "red" }}
          onClick={() => {
            addUsers({ name: "New User", id: 23 });
          }}
        >
          Add Users
        </button>
        <button
          style={{ color: "blue" }}
          onClick={() => {
            cleanUplist();
          }}
        >
          Clean Up list
        </button>
        <br />
        <br />
        <AnimalProvider>
          <AnimalPriceProvider>
            <AnimalList />
          </AnimalPriceProvider>
        </AnimalProvider>
        <br />
        <br />
        <AnimationEx />
        <br />
        <br />
        {/* <RitchTextEditor /> */}
        <br />
        <br />
        <DraftJsEditor />
        <br />
        <br />
        <BitCustomButton />
      </div>
    </div>
  );
}

export default App;
