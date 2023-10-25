"use client";

import { usePathname } from 'next/navigation';
import Link from "next/link";

const SidebarItem = ({
    isSideBarOpen,
    href,
    label,
    icon: Icon,
}) => {
    const pathname = usePathname();
    const isActive = pathname.startsWith(href);

    return (
        <Link 
            className={`group flex items-center p-2 hover:cursor-pointer text-sm gap-x-4
            ${isActive ? "text-white" : "text-darktext2"}`}
            href={href}
        >
            <Icon className="w-6 h-6 text-white group-hover:text-cyan-300" />
            {isSideBarOpen ? <span className="pl-1">{label}</span> : null}
        </Link>
    );
};

export default SidebarItem;