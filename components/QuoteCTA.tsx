// components/QuoteCTA.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {FaWhatsapp} from 'react-icons/fa';

export default function QuoteCTA() {
    return (
        <>
            <section className="relative bg-[#D6002E] overflow-hidden rounded-xl py-16">
                <div className='h-60 w-full bg-white absolute top-0'></div>
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center bg-[#D6002E]">
                    {/* Texto y botón */}
                    <div className="md:w-1/2 text-white ml-48">
                        <h2 className="text-3xl font-bold mb-4">¿Necesitás un presupuesto?</h2>
                        <p className="mb-6">
                            Hacenos tu consulta online por cualquiera de nuestras vías de
                            comunicación. Estamos disponibles todos los días de 9 AM a 18 PM.
                        </p>
                        <Link
                            href="https://wa.me/5491158947428"
                            target="_blank"
                            className="inline-flex items-center bg-green-500 hover:bg-green-600 transition px-5 py-3 rounded-lg text-white"
                        >
                            <FaWhatsapp className="mr-3" /> Chatear con Rexantec
                        </Link>
                    </div>

                    {/* Mockup celular */}
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                        <div className="relative w-[320px] h-[640px]">
                            {/* Marco transparente */}
                            <Image
                                src="/images/iphone-frame.png"
                                alt="iPhone 16 Frame"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className='h-60 w-full bg-white absolute bottom-0'></div>
            </section>
        </>
    );
}
