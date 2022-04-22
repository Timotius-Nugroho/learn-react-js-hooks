import React, { useState } from "react";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`h-screen w-20 ${isOpen && "sm:w-40"} duration-500`}>
      <div
        className={`fixed flex h-screen w-20 ${
          isOpen && "w-40"
        } duration-500 flex-col justify-between bg-zinc-800 text-white`}
      >
        <div className="mt-2 w-full">
          <button
            className={`mb-5 text-center cursor-pointer duration-500 w-full ${
              isOpen && "rotate-[360deg]"
            } hover:scale-150`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            A
          </button>

          <div className="mb-5 flex justify-center items-center mx-4">
            <div className="grow-0 text-xl">B</div>
            <div
              className={`truncate ${
                isOpen ? "w-full ml-3" : "w-0"
              } duration-500`}
            >
              Main Menu
            </div>
          </div>
          <div className="mb-5 flex justify-center items-center mx-4">
            <div className="grow-0 text-xl">C</div>
            <div
              className={`truncate ${
                isOpen ? "w-full ml-3" : "w-0"
              } duration-500`}
            >
              Sec Menu
            </div>
          </div>
          <div className="mb-5 flex justify-center items-center mx-4">
            <div className="grow-0 text-xl">D</div>
            <div
              className={`truncate ${
                isOpen ? "w-full ml-3" : "w-0"
              } duration-500`}
            >
              Trd Menu
            </div>
          </div>
        </div>
        <div className="mx-auto my-2">E</div>
      </div>
    </div>
  );
};

export default SideNav;
