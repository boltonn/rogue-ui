"use client";
import Image from 'next/image';
import Link from 'next/link';
import { HiUserCircle } from "react-icons/hi2";
import DarkModeButton from './DarkModeButton';

export default function Header() {
    return (
        <header className='sticky top-0 z-50 flex items-center justify-between bg-black shadow-md md:px-7'>
            {/* left icon */}
            <Link href="/">
                <div className='relative flex items-center col-span-1 py-2 my-auto cursor-pointer'>
                    <Image
                        src='/logo.png'
                        width="42"
                        height="42"
                        alt="Logo"
                    />
                    <h1 className="pl-2 text-2xl font-bold text-white proxima-nova dark:text-shadow">Rogue</h1>
                </div>
            </Link>

            {/* right user */}
            <div className='flex justify-end col-span-1 py-2 space-x-2'>
                <div className="relative px-4 group">
                    <button className="inline-flex items-center text-sm text-center rounded-lg text-darkgreytext hover:text-white">
                        <HiUserCircle
                            className="bg-transparent cursor-pointer h-7 w-7"
                        />
                        <span className="pl-1 text-xs">Nicholas C. Bolton</span>
                    </button>
                    <DarkModeButton />
                </div>
            </div>
        </header>
    )
}