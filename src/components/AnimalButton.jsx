import React, { memo } from "react";

const AnimalButton = ({ name, dmg }) => {
  console.log("render--", name, dmg);

  return (
    <div style={{ marginBottom: "5px" }}>
      <button>{name + "---" + dmg}</button>
    </div>
  );
};

export default memo(AnimalButton);
