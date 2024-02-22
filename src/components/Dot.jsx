import React from 'react';

const Dot = React.memo(({ x, y, inRange }) => {
    let size = 2;
    if (inRange) {
        size = 3;
        x -= 1;
        y -= 1;
    }
  const style = {
      transform: `translate(${x}px, ${y}px)`,
      height: `${size}px`,
      width: `${size}px`,
  };

  return <div style={style} className='pointer'></div>;
});

export default Dot;