"use client";
import useSearchByTypeStore from "@/store/searchByType";
import Navbar from '@/components/navbar/Navbar';


export default function Home() {
    const { searchByType } = useSearchByTypeStore();
    return (
        <div>
            {searchByType ? <Navbar /> : null}
        </div>
    )
}
