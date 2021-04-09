import React from 'react'
import VanillaTilt from 'vanilla-tilt';

// eslint-disable-next-line react/prop-types
const Tilt = ({ children }) => {
  const tiltRef = React.useRef()

  React.useEffect(() => {
    const { current: tiltNode } = tiltRef
    const vanillaTiltOptions = {
      max: 20,
      speed: 100,
      glare: true,
      'max-glare': 0.5,
      easing: "cubic-bezier(.03,.98,.52,.99)",
    }
    VanillaTilt.init(tiltNode, vanillaTiltOptions)
    return () => tiltNode.vanillaTilt.destroy()
  }, [])

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  );
};

export default Tilt;