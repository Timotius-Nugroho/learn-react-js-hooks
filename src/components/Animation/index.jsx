import React, { useRef, useState } from "react";

const AnimationEx = () => {
  const [toggle, setToggle] = useState(false);

  const makeAnimation = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <button
        onClick={() => {
          makeAnimation();
        }}
      >
        Animate !!!
      </button>
      <div className={`ex-animation ${toggle ? "ex-animation-expand" : ""}`}>
        Hai..
      </div>
    </>
  );
};

export default AnimationEx;
