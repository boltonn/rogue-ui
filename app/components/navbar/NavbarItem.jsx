"use client";

import { usePathname } from 'next/navigation';
import Link from "next/link";


const NavbarItem = ({
    href,
    label,
    icon: Icon,
}) => {
    const pathname = usePathname();
    const isActive = pathname.startsWith(href);

    return (
        <Link 
            className={`group flex flex-col items-center justify-center border-b-2 border-transparent hover:border-cyan-200 hover:cursor-pointer
            ${isActive ? "text-white" : "text-darktext2"}`}
            href={href}
        >
            <Icon className="w-6 h-6 text-white group-hover:text-cyan-300" />
            <span className="pl-1 text-xs">{label}</span>
        </Link>
    );
};

export default NavbarItem;