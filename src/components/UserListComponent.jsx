import React, { memo } from "react";

const UserListComponent = ({ name, id }) => {
  console.log("render--", name, id);

  return <li style={{ marginBottom: "5px" }}>{name + "--->>>" + id}</li>;
};

export default memo(UserListComponent);
