import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Dot from './Dot';
import Line from './Line';

const DotContainer = () => {
    const [showModal, setShowModal] = useState(true);
    function onClickHideModal () {
        setShowModal(false);
    };
    

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = useCallback(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    const initialDots = useMemo(() => {
        let dots = [];
        const { width, height } = windowSize;
        for (let i = 0; i < width; i += 20) {
            for (let j = 0; j < height; j += 20) {
                dots.push({ x: i, y: j, baseX: i, baseY: j, id: `${j}${i}${j}`, inRange: false, });
            }
        }
        return dots;
    }, [windowSize]);

    const [dots, setDots] = useState(initialDots);

    const handleMouseMove = useCallback((e) => {
        requestAnimationFrame(() => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const updatedDots = dots.map((dot) => {
                const distance = Math.sqrt((dot.x - mouseX) ** 2 + (dot.y - mouseY) ** 2);
                const { baseX, baseY } = dot;

                if (distance <= 50) {
                    
                    const angle = Math.atan2(dot.y - mouseY, dot.x - mouseX);
                    const newX = Math.floor(dot.x + Math.cos(angle) * 10);
                    const newY = Math.floor(dot.y + Math.sin(angle) * 10);
                    return { ...dot, x: newX, y: newY, inRange: true };
                } else if (distance <= 70) {
                    return { ...dot, x: dot.x, y: dot.y, inRange: true };
                }
                return { ...dot, x: baseX, y: baseY, inRange: false };
            });

            setDots(updatedDots);
        });
    }, [dots]);

    return (
        <>
        <div
            className='pointer-wrapper'
            onMouseMove={handleMouseMove}
            onClick={handleMouseMove}
            onDrag={handleMouseMove}
        >
            {dots.map((dot, index) => (
                <Dot key={index} x={dot.x} y={dot.y} inRange={dot.inRange} />
            ))}
            <svg style={{ position: 'absolute', height: '100%', width: '100%' }}>
                {dots.map((dot, index) => {
                    const nextDot = dots[index + 1];
                    const nextHorisontalDot = dots[index + Math.floor(windowSize.height / 20) + 1];
                    const lines = [];

                    if (nextDot) {
                        const verticalLine = nextDot && (
                            <Line key={`${dot.id}`} dot={dot} nextDot={nextDot} />
                        );
                        lines.push(verticalLine);
                    }

                    if (nextHorisontalDot) {
                        const horizontalLine = (
                            <Line key={`${dot.id}-${nextHorisontalDot.id}`} dot={dot} nextDot={nextHorisontalDot} />
                        );
                        lines.push(horizontalLine);
                    }

                    return lines.length > 0 ? lines : null;
                })}
            </svg>
            </div>
        {
                showModal ? <div className="undermodal">
                    <div className="undermodal-gray"onClick={onClickHideModal}></div>
                <div className="modal">
                    <h3 className="modal-pointer-title">Grid Animation</h3>
                    <p className="modal-pointer-text">This is a dot grid animation. Here I created a <span>state with dots</span> (they are created exactly to fit on the screen). And also I generate <span>svg-lines</span> between these points. <br />I ran into an <span>optimization issue </span>here, and this part of the project is still under-optimized (in my opinion).
                        <br /><span>Use:</span> just <span>move the mouse</span> on the screen. (if you use a phone - click in different places on the screen)</p>
                        <button className="modal-close" onClick={onClickHideModal}>Let`s see</button>
                </div>
            </div> : ''
            }
        </>
    );
};

export default DotContainer;