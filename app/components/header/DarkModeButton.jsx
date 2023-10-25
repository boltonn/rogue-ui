"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { HiOutlineSun, HiMoon } from "react-icons/hi";


const DarkModeButton = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme, systemTheme} = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const currentTheme = theme === "system" ? systemTheme : theme;
    return (
        <div className="absolute z-10 hidden bg-white dark:bg-darkbg3 group-hover:block w-full">
            <div
                className="flex text-center items-center justify-start pl-5 p-2.5 rounded-lg 
                dark:text-white dark:hover:text-white cursor-pointer"
            >
                {currentTheme === 'light'
                    ? (
                        <button className='flex' onClick={() => setTheme('dark')}>
                            <HiMoon className="h-4 w-4 bg-transparent" />
                            <span className="pl-1 text-xs">Dark Mode</span>
                        </button>
                    )
                    : (
                        
                        <button className='flex' onClick={() => setTheme('light')}>
                            <HiOutlineSun className="h-4 w-4 bg-transparent" />
                            <span className="pl-1 text-xs">Light Mode</span>
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default DarkModeButton;