import { useState, useEffect } from 'react';
import '../App.css'

export const Main = () => {

    const [isAnimated, setIsAnimated] = useState(false);
    const [positions, setPositions] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState(Array(12).fill(true));

    useEffect(() => {
        setTimeout(() => {
            setIsAnimated(true);
        }, 500);
    }, []);

    useEffect(() => {
        if (isAnimated) {
            setPositions(spread());
        } else {
            setVisibleCards(Array(12).fill(true))
            setPositions(Array.from({ length: 12 }, (_, i) => ({ x: i, y: i })));
            setSelectedCards([])
        }
    }, [isAnimated]);

    const spread = () => {
        return Array.from({ length: 12 }, (_, i) => {
            const angle = (180 / 11 * i) * (Math.PI / 180);
            return {
                x: 600 * Math.cos(angle),
                y: 200 * Math.sin(angle),
            };
        });
    };

    const handleCardClick = (i) => {
        if (selectedCards.length < 3) {
            setSelectedCards([...selectedCards, i]);
            setVisibleCards(visibleCards.map((visible, index) => index === i ? false : visible));
        }
    };

    return (
        <>
            <div className="w-full h-4/5">
                <div className='w-full h-2/3 pt-10'>
                    <div className='w-24 h-32  m-auto relative bg-tarot-back bg-cover bg-center'>
                        {positions.map((card, i) => (
                            visibleCards[i] && (
                                <div key={i} className={`card card-${i} w-24 h-32 bg-tarot-back bg-cover bg-center absolute transition-all duration-1000 cursor-pointer`}
                                    style={{ left: `${card.x}px`, top: `${card.y}px` }}
                                    onClick={() => handleCardClick(i)} />
                            )
                        ))}
                    </div>
                </div>
                <div className='w-full h-1/3 pb-10'>
                    <div className='w-1/2 h-full border border-logo m-auto flex justify-start'>
                        {selectedCards.map((i) => (
                            <div key={i} className={`h-full w-1/3 flex justify-center items-center flex-row`} >
                                <div className='w-28 h-32 bg-tarot-back bg-cover bg-center'></div>
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
            </div>
        </>
    );
};
