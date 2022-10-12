import React, { useState, useCallback } from "react";
import SideNav from "./components/SideNav";
import useGetDummyUsers from "./customhooks/useGetDummyUsers";
import useGetDummyUserById from "./customhooks/useGetDummyUsersById";
import SelectedUser from "./components/SelectedUser";
import FramerMotionDemo from "./components/FramerMotionDemo/FramerMotionDemo";

function App() {
  const [limit, setLimit] = useState(5);
  const [selectedId, setSelectedId] = useState(undefined);
  const { data: userList } = useGetDummyUsers({ limit });
  const { data: user } = useGetDummyUserById({ id: selectedId });

  const cleanSelectedUser = useCallback(() => {
    console.log("CLEAN");
    setSelectedId(undefined);
  }, []);

  // const cleanSelectedUser = () => {
  //   console.log("CLEAN");
  //   setSelectedId(undefined);
  // };

  return (
    <div className="flex">
      <div>
        <SideNav />
      </div>
      <div className="m-3">
        <div className="mb-4">
          <input
            className="border-2 bg-orange-300"
            value={limit}
            type="number"
            onChange={(e) => {
              setLimit(e.target.value);
            }}
          />
        </div>
        {/* {userList.map((e, i) => {
          return (
            <div key={i} className="flex">
              <p>{`${i + 1}. ${e.name}`}</p>
              <button
                className="ml-2 bg-amber-300"
                onClick={() => {
                  setSelectedId(e.id);
                }}
              >
                SELECT
              </button>
            </div>
          );
        })} */}
        <SelectedUser
          name={user?.name ?? "not selected"}
          onClean={cleanSelectedUser}
        />
        <div style={{ height: "500px" }}></div>
        <div className="mt-4">
          <FramerMotionDemo />
        </div>
        <div className="mt-4">
          <FramerMotionDemo />
        </div>
        <div className="mt-4">
          <FramerMotionDemo />
        </div>
        <div className="mt-4">
          <FramerMotionDemo />
        </div>
        <div className="mt-4">
          <FramerMotionDemo />
        </div>
        <div className="mt-4">
          <FramerMotionDemo />
        </div>
        <div className="mt-4">
          <FramerMotionDemo />
        </div>
        <div className="mt-4">
          <FramerMotionDemo />
        </div>
        <div className="mt-4">
          <FramerMotionDemo />
        </div>
        <div className="mt-4">
          <FramerMotionDemo />
        </div>
        <div className="mt-4">
          <FramerMotionDemo />
        </div>
        <div className="mt-4">
          <FramerMotionDemo />
        </div>
        <div className="mt-4">
          <FramerMotionDemo />
        </div>
        <div className="mt-4">
          <FramerMotionDemo />
        </div>
      </div>
    </div>
  );
}

export default App;
