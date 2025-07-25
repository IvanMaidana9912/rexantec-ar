'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dlg = dialogRef.current;
        if (dlg && !dlg.open) dlg.showModal();
        window.scrollTo(0, 0);
    }, []);

    const onDismiss = () => router.back();
    const handleReload = () => window.location.reload();

    // Busca el contenedor solo en cliente
    if (typeof window === 'undefined') return null;
    const modalRoot = document.getElementById('modal-products');
    if (!modalRoot) {
        console.warn('Modal: no existe #modal-products en el DOM');
        return null;
    }

    return createPortal(
        <div className="select-none">
            <div
                className="absolute w-full top-0 -bottom-[57%] bg-black/50 z-[1001]"
                onClick={onDismiss} />
            <dialog
                ref={dialogRef}
                className="min-w-80 min-h-80 lg:min-w-[500px] lg:min-h-[500px] border-none rounded-xl flex flex-col justify-center items-center size-12 font-medium nth-1:object-contain"
                onClose={onDismiss}>
                {children}
                <div className="w-full h-10 flex items-center justify-center hover:bg-zwol-1/50 hover:text-white">
                    <button className="text-sm h-full w-full" onClick={handleReload}>
                        Más Información...
                    </button>
                </div>
                <button
                    onClick={onDismiss}
                    className="absolute top-2.5 right-2.5 p-1 rounded-full bg-transparent hover:bg-zwol-1 after:hover:text-white cursor-pointer flex items-center justify-center font-medium size-6 after:text-zwol-1 after:content-['X']" />
            </dialog>
        </div>,
        modalRoot
    );
};