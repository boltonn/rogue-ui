"use client"

import { useState } from "react";
import { HiCheck, HiChevronUpDown, HiRectangleStack } from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import useCollectionStore from "@/store/collections";
import useCollections from "@/hooks/useCollections";



const CollectionsDropdown = ({
    isSideBarOpen,
}) => {

    const { data: collectionChoices, isLoading, isError } = useCollections();
    const { collections, addCollection, removeCollection } = useCollectionStore();
    const pathname = usePathname();
    const isActive = pathname.startsWith("/collections");
    const [isOpen, setIsOpen] = useState(false);
    const [term, setTerm] = useState("");

    const handleDropdownClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const handleClick = (collection) => {
        if (collections.includes(collection)) {
            removeCollection(collection);
        } else {
            addCollection(collection);
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Error: </p>;
    }

    return (
        <div>
            <Link
                className={`group flex items-center p-2 hover:cursor-pointer text-sm gap-x-4
                ${isActive ? "text-white" : "text-darktext2"}`}
                href="/collections"
            >
                <HiRectangleStack className="w-6 h-6 text-white group-hover:text-cyan-300" />
                {isSideBarOpen
                    ?
                    <div className="flex items-center">
                        <span className="pl-1">Collections</span>
                        <button onClick={(e) => handleDropdownClick(e)}>
                            <HiChevronUpDown className="w-5 h-5 pl-1 text-white group-hover:text-cyan-300" />
                        </button>
                    </div>
                    :
                    null
                }
            </Link>
            {
                (isSideBarOpen && isOpen) ? (
                    <div className="w-full pl-3 mt-1 text-sm text-white border-none gap-y-2">
                        <input 
                            className="w-full px-2 py-1 text-white bg-transparent border-none focus:outline-none" 
                            placeholder="Search Collections..."
                            onChange={e => setTerm(e.target.value)}
                        />
    
                        <div className="block border-none gap-y-2">
                            {collectionChoices.map((collection) => (
                                collection.startsWith(term) ?
                                <div 
                                    key={collection}
                                    className={`
                                        flex 
                                        items-center 
                                        justify-between 
                                        pl-2 
                                        leading-6 
                                        cursor-pointer
                                        hover:bg-purple
                                        ${collections.includes(collection) ? 'bg-purple bg-opacity-40' : null}`}
                                    onClick={() => handleClick(collection)}
                                >
                                    <p>{collection}</p>
                                    {collections.includes(collection) ? <HiCheck className="w-4 h-4 mr-12 font-extrabold text-purple" /> : null}
                                </div> : null
                            ))}
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};


export default CollectionsDropdown;