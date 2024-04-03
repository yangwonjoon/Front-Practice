import { useState } from 'react';
import '../App.css';

export const Main = () => {
    const [count, setCount] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);
    const [isAnimated, setIsAnimated] = useState(false);

    const handleOnClick = () => {
        setIsAnimated(!isAnimated);

        if (isAnimated) {

            const radius = 300; // 반원의 반지름
            const arcCenterX = 0; // 반원 중심 X 좌표
            const arcCenterY = 0; // 반원 중심 Y 좌표
            const spread = 180; // 카드가 퍼질 각도 
            const startAngle = 90 - spread / 2; // 시작 각도
            const increment = spread / (count.length - 1); // 각 카드 사이의 각도 증가분

            count.forEach((_, i) => {
                const angle = (startAngle + increment * i) * (Math.PI / 180);
                const x = arcCenterX + radius * Math.cos(angle);
                const y = arcCenterY + radius * Math.sin(angle);

                setTimeout(() => {
                    const card = document.querySelector(`.card-${i}`);
                    if (card) {
                        card.style.left = `${x}px`;
                        card.style.top = `${y}px`;
                    }
                }, i * 100);
            });
        }
    };

    return (
        <>
            <div className="w-full h-4/5">
                <div className='w-full h-2/3 pt-10' onClick={handleOnClick}>
                    <div className='w-12 h-20 bg-black m-auto border border-white relative'>
                        {
                            count.map((_, i) => (
                                <div key={i} className={`card card-${30 - i} w-12 h-20 bg-black border border-white absolute`}
                                    style={{
                                        left: `${i}px`, top: `${i}px`,
                                        transition: 'all 1s'
                                    }} />
                            ))
                        }
                    </div>
                </div>
                <div className='w-full h-1/3 p-10'>
                    <div className='w-2/3 h-full border border-logo m-auto'></div>
                </div>
            </div>
        </>
    );
};
