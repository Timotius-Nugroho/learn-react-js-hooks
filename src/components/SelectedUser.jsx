import React from "react";

const SelectedUser = ({ name, onClean }) => {
  console.log("RENDER ME");
  return (
    <div className="flex">
      <div className="mt-3">{`SELECTED USER: ${name ?? "not selected"}`}</div>
      <button className="ml-2 bg-lime-600" onClick={onClean}>
        CLEAN
      </button>
    </div>
  );
};

export default React.memo(SelectedUser);

function areEqual(prevProps, nextProps) {
  console.log(Boolean(prevProps.onClean === nextProps.onClean));
  return Boolean(prevProps.name === nextProps.name);
}
