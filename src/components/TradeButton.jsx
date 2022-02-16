import React, { memo } from "react";

const TradeButton = ({ value, remove }) => {
  console.log("Trade render--", value);

  return (
    <div style={{ display: "inline" }}>
      <button style={{ color: "black", backgroundColor: "skyblue" }}>
        {value}
      </button>
      <button
        onClick={() => {
          remove(value);
        }}
        style={{ backgroundColor: "yellow", marginRight: "5px" }}
      >
        R
      </button>
    </div>
  );
};

export default memo(TradeButton);
