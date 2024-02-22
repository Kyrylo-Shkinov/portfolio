import React from 'react';

const Line = React.memo(({dot, nextDot}) => {
    const style = { stroke: 'black', strokeWidth: '.2px' };
    if (dot.baseY - nextDot.baseY >= 40) {
        return null;
    }
    

  return <line
                key={`${dot.id}-${nextDot.id}`}
                x1={dot.x + 1}
                y1={dot.y + 1}
                x2={nextDot.x + 1}
                y2={nextDot.y + 1}
                style={style}
              />;
});

export default Line;