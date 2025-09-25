"use client"; // Ensure this is a client component

import React from 'react';
import CountUp from './Countup.jsx';

const Cannonball = () => {
    return (
        <div className="relative w-[25vw] h-[25vw] md:w-48 md:h-48 bg-[#10233B] rounded-full shadow-inner flex items-center justify-center">
            {/* Inner Shadow Effect */}
            <div className="absolute inset-0 rounded-full bg-[#10233B] opacity-70 shadow-[inset_0_4px_15px_rgba(156,156,156,0.7)]"></div>
            
            {/* Text Container */}
            <div className="relative z-10 text-center text-white">
                <div className="text-lg md:text-2xl font-bold">
                <CountUp
                    from={0}
                    to={85}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    />+
                </div>
                <div className="text-xs md:text-lg">Teams</div>
            </div>
        </div>
    );
};

export default Cannonball;
