import { useState } from 'react';

import card1 from '../assets/images/tarot1.svg';
import card2 from '../assets/images/tarot2.svg';
import card3 from '../assets/images/tarot3.svg';

interface RotationAngles {
    x: number;
    y: number;
}

export const Intro = () => {

    const cards = [card1, card2, card3];
    const [rotationAngles, setRotationAngles] = useState<RotationAngles[]>([]);

    const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const maxRotation = 40;

        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const rotationYAngle = (offsetX / rect.width) * -maxRotation;
        const rotationXAngle = (offsetY / rect.height) * maxRotation;

        const newRotationAngles = [...rotationAngles];
        newRotationAngles[index] = { x: rotationXAngle - maxRotation / 2, y: rotationYAngle + maxRotation / 2 };

        setRotationAngles(newRotationAngles);
    };

    const handleMouseLeave = () => {
        setRotationAngles([]);
    };

    return (
        <>
            <div className="absolute inset-0 bg-black opacity-50 justify-center"></div>
            <div className='w-full h-4/5 flex flex-row pt-12 justify-center relative'>
                {cards.map((card, index) => (
                    <div key={index} className='basis-1/3 flex justify-center items-center'>
                        <div></div>
                        <div
                            style={{
                                backgroundImage: `url(${card})`,
                                transform: `perspective(350px) rotateY(${rotationAngles[index]?.y || 0}deg) rotateX(${rotationAngles[index]?.x || 0}deg)`,
                                transition: 'transform 0.1s',
                                width: '80%',
                                height: '80%',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            onMouseMove={(e) => handleMouseMove(index, e)}
                            onMouseLeave={handleMouseLeave}
                            className='mx-auto brightness-110 z-10'
                        />
                    </div>
                ))}
            </div>
        </>
    );
};
