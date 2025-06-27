'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';

// interface FireIceSectionProps {
//   children: React.ReactNode;
// };

export default function FireIceSection() {
    return (
        <section className=" relative w-screen left-1/2 transform -translate-x-1/2 h-80 md:h-96 lg:h-[30rem] overflow-hidden bg-[#0f446c]">
            <div className="absolute inset-0">
                <DotLottieReact
                    src="/animations/fire-ice.json"  // o .json si prefieres
                    loop
                    autoplay
                    style={{
                        width: '100vw',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className="relative z-10 flex items-center justify-center h-80 " />
            {/* <div className="relative z-20">
                {children}
            </div> */}
        </section>
    )
};