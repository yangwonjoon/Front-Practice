import { useState } from 'react';
import card1 from '../assets/images/back.svg';
import card2 from '../assets/images/back.svg';
import card3 from '../assets/images/back.svg';

interface RotationAngles {
    x: number;
    y: number;
}

export const Intro = () => {

    const cards = [card1, card2, card3];
    const [rotationAngles, setRotationAngles] = useState<RotationAngles[]>(cards.map(() => ({ x: 0, y: 0 })));
    const [overlayStyles, setOverlayStyles] = useState(cards.map(() => ({
        backgroundPosition: '100%', opacity: 0, filter: 'brightness(1)'
    })));


    const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const maxRotation = 40;
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const rotationYAngle = (offsetX - rect.width / 2) / rect.width * maxRotation;
        const rotationXAngle = (rect.height / 2 - offsetY) / rect.height * maxRotation;

        const newRotationAngles = rotationAngles.slice();
        newRotationAngles[index] = { x: rotationXAngle, y: rotationYAngle };
        setRotationAngles(newRotationAngles);

        const gradientX = (offsetX / rect.width) * 100;
        const gradientY = (offsetY / rect.height) * 100;
        const newOverlayStyles = overlayStyles.slice();

        newOverlayStyles[index] = {
            backgroundPosition: `${gradientX}% ${gradientY}%`,
            opacity: 1.2,
            filter: 'brightness(1.5)'
        };
        setOverlayStyles(newOverlayStyles);
    };

    const handleMouseLeave = (index: number) => {
        const newRotationAngles = rotationAngles.slice();
        newRotationAngles[index] = { x: 0, y: 0 };
        setRotationAngles(newRotationAngles);

        const newOverlayStyles = overlayStyles.slice();
        newOverlayStyles[index] = { backgroundPosition: '50% 50%', opacity: 0, filter: 'brightness(1)' };
        setOverlayStyles(newOverlayStyles);
    };

    return (
        <>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center"></div>
            <div className='w-full h-4/5 flex flex-row justify-center relative'>
                {cards.map((card, index) => (
                    <div key={index} className='flex-1 flex justify-center items-center relative'>
                        <div className='w-4/5 h-4/5 mx-auto relative cursor-pointer'
                            onMouseMove={(e) => handleMouseMove(index, e)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            style={{
                                transform: `perspective(1000px) rotateY(${rotationAngles[index].y}deg) rotateX(${rotationAngles[index].x}deg)`,
                                transformOrigin: 'center',
                                transition: 'all 0.1s',
                                backgroundImage: `url(${card})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}>
                            <div className='absolute inset-0 w-full h-full'
                                style={{
                                    background: `radial-gradient(circle at ${overlayStyles[index].backgroundPosition}, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)`,
                                    transition: 'background 0.1s, opacity 0.1s',
                                    opacity: overlayStyles[index].opacity,
                                    filter: overlayStyles[index].filter,
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
