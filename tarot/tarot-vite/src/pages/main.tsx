import { useState } from 'react';
import '../App.css';

export const Main = () => {

    return (
        <>
            <div className="w-full h-4/5 ">
                <div className='w-full h-2/3'>
                    <div className='w-12 h-20 bg-black m-auto mt-20 border border-white relative'></div>
                    <div className='w-12 h-20 bg-black border border-white absoulte left-100'></div>
                </div>
                <div className='w-full h-1/3 p-10'>
                    <div className='w-2/3 h-full border border-logo m-auto'></div>
                </div>
            </div>
        </>
    )
}
