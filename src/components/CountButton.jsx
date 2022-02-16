import React, { memo } from "react";

const CountButton = ({ onclick }) => {
  console.log("render--CountButton");

  return (
    <button
      onClick={() => {
        onclick();
      }}
    >
      Click me!!!
    </button>
  );
};

export default memo(CountButton);
