'use client'

import Link from "next/link"

export default function Gallery() {
    return (
        <>
            <section className="h-auto container grid grid-cols-3 text-center items-center text-white font-bold mx-auto gap-16 my-20">
                <Link href={'/'} className="px-5 py-36 border-red-800  rounded-2xl border-2"><h1>01</h1></Link>
                <Link href={'/'} className="px-5 py-36 border-red-800  rounded-2xl border-2"><h1>02</h1></Link>
                <Link href={'/'} className="px-5 py-36 border-red-800  rounded-2xl border-2"><h1>03</h1></Link>
                <Link href={'/'} className="px-5 py-36 border-red-800  rounded-2xl border-2"><h1>04</h1></Link>
                <Link href={'/'} className="px-5 py-36 border-red-800  rounded-2xl border-2"><h1>05</h1></Link>
                <Link href={'/'} className="px-5 py-36 border-red-800  rounded-2xl border-2"><h1>06</h1></Link>
                <Link href={'/'} className="px-5 py-36 border-red-800  rounded-2xl border-2"><h1>07</h1></Link>
            </section>
        </>
    )
};