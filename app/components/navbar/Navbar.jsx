"use client";

import { HiOutlineChatBubbleBottomCenter, HiEnvelope, HiPhoto, HiVideoCamera, HiMapPin } from "react-icons/hi2";
import { SiGraphql } from "react-icons/si";
import NavbarItem from "./NavbarItem";

const navItems = [{
        label: 'Chats',
        href: '/chats',
        icon: HiOutlineChatBubbleBottomCenter,
    },
    {
        label: 'Emails',
        href: '/emails',
        icon: HiEnvelope,
    },
    {
        label: 'Images',
        href: '/images',
        icon: HiPhoto,
    },
    {
        label: 'Videos',
        href: '/videos',
        icon: HiVideoCamera,
    },
    {
        label: 'Networks',
        href: '/networks',
        icon: SiGraphql,
    },
    {
        label: 'Locations',
        href: '/locations',
        icon: HiMapPin,
    }
]

const Navbar = () => {
    return (
        <nav className='flex justify-between w-auto px-4 pt-3 overflow-x-auto text-l whitespace-nowrap'>
            {navItems.map((item) => (
                <NavbarItem
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                />
            ))}
        </nav>
    );
};

export default Navbar;