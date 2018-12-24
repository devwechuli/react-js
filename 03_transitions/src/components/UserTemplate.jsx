import React from "react";
import PropTypes from "prop-types";

const UserTemplate = props => {
  console.log(props);
  return (
    <div>
      User Template
      <p>Parta</p>
      {props.message()}
    </div>
  );
};

UserTemplate.propTypes = {
  name: PropTypes.oneOf(['Francis','Paul']),
  lastname: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf(['Wechuli','Wafula'])
  ]),
  age: PropTypes.number,
  hobbies: PropTypes.array,
  // hobbies: PropTypes.arrayOf(PropTypes.string), //we can check an array
  swahili: PropTypes.bool,
  message: PropTypes.func,
  car: PropTypes.object,
  mother:PropTypes.string.isRequired,
  custom:function(props,propName,componentName){
    console.log(props,propName,componentName)
  }
};

export default UserTemplate;
