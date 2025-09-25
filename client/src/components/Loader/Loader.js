// File path: src/components/Loader/Loader.js
'use client'; // Marking this as a client component

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-[#06121f] overflow-hidden">
            <DotLottieReact
                src="https://lottie.host/752ba6f9-6738-4d75-98f2-21f13499ff81/JfAeGvwxTg.lottie"
                loop
                autoplay
            />
        </div>
    );
};

export default Loader;
