import { useState, useEffect } from 'react';

export const Main = () => {

    const [isAnimated, setIsAnimated] = useState(false);
    const [positions, setPositions] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState(Array(30).fill(true));

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
            setVisibleCards(Array(30).fill(true))
            setSelectedCards([])
        }
    }, [isAnimated]);

    const spread = () => {
        return Array.from({ length: 30 }, (_, i) => {
            const angle = (0 + 180 / 29 * i) * (Math.PI / 180);
            return {
                x: 250 * Math.cos(angle),
                y: 250 * Math.sin(angle),
            };
        });
    };

    const handleCardClick = (i) => {
        if (selectedCards.length < 3) {
            setSelectedCards([...selectedCards, i]);
            setVisibleCards(visibleCards.map((visible, index) => index === i ? false : visible));
        }
    };

    console.log('selectedCards:', selectedCards, 'visible:', visibleCards)

    return (
        <>
            <div className="w-full h-4/5">
                <div className='w-full h-2/3 pt-10'>
                    <div className='w-12 h-20 bg-black m-auto border border-white relative'>
                        {positions.map((card, i) => (
                            visibleCards[i] && (
                                <div key={i} className={`card card-${i} w-12 h-20 bg-black border border-white absolute transition-all duration-1000`}
                                    style={{ left: `${card.x}px`, top: `${card.y}px` }}
                                    onClick={() => handleCardClick(i)} />
                            )
                        ))}
                    </div>
                </div>
                <div className='w-full h-1/3 p-10'>
                    <div className='w-1/2 h-full border border-logo m-auto flex justify-start'>
                        {selectedCards.map((i) => (
                            <div key={i} className={`h-full w-1/3 flex justify-center items-center flex-row`} >
                                <div className='w-12 h-20 bg-black border border-white'>
                                    <p className='text-white'>{i + 1}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='text-white' onClick={() => {
                        if (isAnimated) {
                            setIsAnimated(false);
                            setTimeout(() => setIsAnimated(true), 1500);
                        }
                    }}>다시하기</button>
                </div>
            </div >
        </>
    );
};
