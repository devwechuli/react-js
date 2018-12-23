import React from "react";
import UserHoC from "../hocs/UserHoC";

const User = (props) => {
  console.log(props);
  return <div>User 1</div>;
};
export default UserHoC(User, "hello"); //we could even pass additional componentS
