import React from "react";
import BitCustomButton from "./BitCustomButton";

const cb = () => {
  console.log("CB_HEllO...");
};

export const BitCustomButtonBasic = () => {
  return <BitCustomButton name={"BASIC"} cb={cb} />;
};
