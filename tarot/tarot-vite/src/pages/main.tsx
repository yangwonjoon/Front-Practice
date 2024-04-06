import { useState, useEffect } from 'react';

export const Main = () => {

    const [isAnimated, setIsAnimated] = useState(false);
    const [positions, setPositions] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsAnimated(true);
        }, 500);
    }, []);

    useEffect(() => {
        if (isAnimated) {
            setPositions(spread());
        } else {
            setPositions(Array.from({ length: 30 }, (_, i) => ({ x: i, y: i })));
            setSelectedCards([]);
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

    const handleCardClick = (i) => {
        if (selectedCards.length < 3 && !selectedCards.includes(i)) {
            setSelectedCards([...selectedCards, i]);
        }
    };

    return (
        <>
            <div className="w-full h-4/5">
                <div className='w-full h-2/3 pt-10'>
                    <div className='w-12 h-20 bg-black m-auto border border-white relative' onClick={() => setIsAnimated(true)}>
                        {positions.map((card, i) => (
                            <div key={i}
                                className={`card card-${i} w-12 h-20 bg-black border border-white absolute transition-all duration-1000 cursor-pointer hover:scale-110 ${selectedCards.includes(i) ? 'opacity-0' : 'opacity-100'}`}
                                style={{ left: `${card.x}px`, top: `${card.y}px` }}
                                onClick={() => handleCardClick(i)} />
                        ))}
                    </div>
                </div>
                <div className='w-full h-1/3 p-10'>
                    <div className='w-1/2 h-full border border-logo m-auto flex justify-start'>
                        {selectedCards.map((i) => (
                            <div key={i} className='h-full w-1/3 flex justify-center items-center transition-opacity duration-1000'>
                                <div className='w-12 h-20 bg-black border border-white opacity-100'>
                                    <p className='text-white'>{i + 1}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='text-white' onClick={() => {
                        setIsAnimated(false);
                        setTimeout(() => {
                            setIsAnimated(true);
                            setSelectedCards([]);
                        }, 1500);
                    }}>다시하기</button>
                </div>
            </div>
        </>
    );
};
