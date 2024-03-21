import { useState, useRef } from 'react';

import card1 from '../assets/images/tarot1.svg';
import card2 from '../assets/images/tarot2.svg';
import card3 from '../assets/images/tarot3.svg';

interface RotationAngles {
    x: number;
    y: number;
}

export const Intro = () => {

    // const cardsRef = useRef<HTMLDivElement[]>([]);

    const card = [card1, card2, card3]
    //카드의 회전 각도 저장
    const [rotationAngles, setRotationAngles] = useState<RotationAngles[]>([]);

    //마우스 올렸을때 함수
    const handleMouseMove = (index: number, e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {

        const rect = e.currentTarget.getBoundingClientRect();
        const maxRotation = 40;

        //카드의 x,y 좌표
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        //회전할 각도
        const rotationYAngle = (offsetX / rect.width) * -maxRotation;
        const rotationXAngle = (offsetY / rect.height) * maxRotation;

        //복사본
        const resultAngles = [...rotationAngles];

        resultAngles[index] = { x: rotationXAngle - maxRotation / 2, y: rotationYAngle + maxRotation / 2 };
        setRotationAngles(resultAngles);

    };

    //마우스 없을 때
    const handleMouseLeave = () => {
        setRotationAngles([]);
    };



    return (
        <>
            <div className="absolute inset-0 bg-black opacity-50 justify-center"></div>
            <div className='w-full h-4/5 flex flex-row pt-12 justify-center relative'>
                {card.map((a, index) => (
                    <div key={index} className='basis-1/3'>
                        {/* <div className='h-4/5 w-4/5 mx-auto absolute inset-0 z-2 card-overlay'></div> */}
                        <img
                            style={{
                                transform: `
                                perspective(350px) 
                                rotateY(${rotationAngles[index]?.y || 0}deg) 
                                rotateX(${rotationAngles[index]?.x || 0}deg)
                            `,
                                transition: 'all 0.1s',
                            }}
                            onMouseMove={(e) => handleMouseMove(index, e)}
                            onMouseLeave={handleMouseLeave}
                            className='h-4/5 w-4/5 mx-auto brightness-110 z-1'
                            src={a}
                            alt={`Card ${index + 1}`}
                        />
                    </div>

                ))}
            </div >
        </>
    )
};