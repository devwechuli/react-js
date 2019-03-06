import React from "react";
import { useSpring, animated } from 'react-spring'

const AnimatedDiv = props => {
    const springProps = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <React.Fragment>
      <animated.div style={springProps} className="box m-t-md">
        <h2 className="subtitle has-text-centered has-text-weight-semibold">And You as well must die</h2>
        <p>
          And you as well must die,Beloved dust <br />
          And all your beauty stand you in no stead <br />
          This flawless vital hand, this perfect head <br />
          This body of flame and steel before the gust of death <br />
          Or under his autumnal frost, shall be as any leaf, be no less dead
          <br />
          Than the first leaf that fell <br />
        </p>
      </animated.div>
    </React.Fragment>
  );
};

export default AnimatedDiv;
