"use client";

import { useState } from "react";
import { HiOutlineArrowLeft, HiInformationCircle, HiBell, HiUser } from "react-icons/hi2";
import { TiFlowMerge } from "react-icons/ti";
import CollectionsDropdown from "./CollectionsDropdown";
import KibanaDropdown from "./KibanaDropdown";
import SearchByTypeToggle from "./SearchByTypeToggle";
import SidebarItem from "./SidebarItem";


const sidebarItems = [
    {
        label: 'Pipelines',
        href: '/pipelines',
        icon: TiFlowMerge,
    },
    {
        label: 'Profile',
        href: '/profile',
        icon: HiUser,
    },
    {
        label: 'Notifications',
        href: '/notifications',
        icon: HiBell,
    },
    {
        label: 'About',
        href: '/about',
        icon: HiInformationCircle,
    }
]

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    return (
            <div className={`relative duration-300 p-5 bg-darkbg text-darktext2 ${isOpen ? "w-72" : "w-20"}`}>
                <HiOutlineArrowLeft
                    className={`absolute rounded-full cursor-pointer top-9 dark:bg-white dark:text-darktext2 -right-2 ${!isOpen && "rotate-180"}`}
                    onClick={() => setIsOpen(!isOpen)}
                />
                <SearchByTypeToggle isSideBarOpen={isOpen}/>
                <div className='pt-2'>
                    <CollectionsDropdown isSideBarOpen={isOpen}/>
                    <KibanaDropdown isSideBarOpen={isOpen}/>
                    {sidebarItems.map((item) => (
                        <SidebarItem
                            key={item.label}
                            isSideBarOpen={isOpen}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </div>
    )
}