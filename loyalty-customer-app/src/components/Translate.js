//Translate.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const Translate = (props) => {
  const spring = useSpring({
    from: {
      scale: 0,
    },
    to: {
      scale: 1,
    },
    config: {
      mass: 6,
      tension: 170,
      velocity: 0.01,
    },
  });

  return <animated.div style={{ ...spring, display: 'inline-block' }}>{props.icon}</animated.div>;
};

export default Translate;