import React from "react";

const BitCustomButton = ({ name, cb }) => {
  return (
    <div style={{ marginBottom: "5px" }}>
      <button
        onClick={() => {
          cb();
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default BitCustomButton;
