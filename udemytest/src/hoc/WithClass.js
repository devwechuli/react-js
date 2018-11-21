import React from "react";
// const withClass = props => <div className={props.classes}>{props.childred}</div>;

// export default withClass;

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
