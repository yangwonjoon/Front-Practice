import { useState } from 'react';
import '../App.css';

export const Main = () => {
    const [count, setCount] = useState(Array.from({ length: 30 }, (_, i) => i + 1));
    const [isAnimated, setIsAnimated] = useState(false);

    const handleOnClick = () => {
        setIsAnimated(!isAnimated);

        if (isAnimated) {


            const radius = 200; // 반원의 반지름 설정
            const arcCenterX = 300; // 반원 중심의 X 좌표
            const arcCenterY = 300; // 반원 중심의 Y 좌표
            const spread = 180; // 카드가 퍼질 각도 (예: 180도는 반원)
            const startAngle = -spread / 2; // 시작 각도
            const increment = spread / (count.length - 1); // 각 카드 사이의 각도 증가분

            count.forEach((_, i) => {
                const angle = (startAngle + increment * i) * (Math.PI / 180); // 라디안으로 변환
                const x = arcCenterX + radius * Math.cos(angle); // X 좌표 계산
                const y = arcCenterY + radius * Math.sin(angle); // Y 좌표 계산

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

    const initialX = 0; // 예시 X 좌표
    const initialY = 0; // 예시 Y 좌표

    return (
        <>
            <div className="w-full h-4/5">
                <div className='w-full h-2/3 pt-10' onClick={handleOnClick}>
                    <div className='w-12 h-20 bg-black m-auto border border-white relative'>
                        {
                            count.map((_, i) => (
                                <div key={i} className={`card card-${i} w-12 h-20 bg-black border border-white absolute`}
                                    style={{ left: `${initialX}px`, top: `${initialY}px` }} />
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
