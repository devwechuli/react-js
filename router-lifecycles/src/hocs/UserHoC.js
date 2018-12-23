import React from "react";

const UserHoC = (WrappedComponent, arg1) => {
    
  return (props) => (
     // console.log(props)
    <div>
        {arg1}
      <WrappedComponent {...props}/>
      {console.log(props)}
    </div>
  );
};

export default UserHoC;
