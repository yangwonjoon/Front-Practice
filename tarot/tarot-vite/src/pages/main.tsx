import { useState, useEffect } from 'react';

export const Main = () => {

    const [isAnimated, setIsAnimated] = useState(false);
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        if (isAnimated) {
            const newPositions = spread();
            setPositions(newPositions);
        } else {
            setPositions(Array.from({ length: 30 }, (_, i) => ({ x: i, y: i })));
        }
    }, [isAnimated]);

    const spread = () => {
        return Array.from({ length: 30 }, (_, i) => {
            const angle = (0 + 180 / 29 * i) * (Math.PI / 180);
            return {
                x: 500 * Math.cos(angle),
                y: 250 * Math.sin(angle),
            };
        });
    };

    return (
        <>
            <div className="w-full h-4/5">
                <div className='w-full h-2/3 pt-10'>
                    <div className='w-12 h-20 bg-black m-auto border border-white relative'
                        onClick={() => {
                            setIsAnimated(true);
                        }}>
                        {positions.map((pos, i) => (
                            <div key={i} className={`card card-${i} w-12 h-20 bg-black border border-white absolute`}
                                style={{
                                    left: `${pos.x}px`, top: `${pos.y}px`,
                                    transition: 'all 1s'
                                }}

                            />
                        ))}
                    </div>
                </div>
                <div className='w-full h-1/3 p-10'>
                    <div className='w-2/3 h-full border border-logo m-auto'>
                        <button onClick={() => {
                            setIsAnimated(false)
                            setTimeout(() => {
                                setIsAnimated(true)
                            }, 1500);
                        }}>다시하기</button>
                    </div>
                </div>
            </div >
        </>
    );
};
