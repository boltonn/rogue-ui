'use client'
import { useQuery } from "@tanstack/react-query";
import rogueBackend from "@/apis/rogueBackend";

async function fetchCollections() {
    const { data } = await rogueBackend.get("/collections/");
    return data;
}

const useCollections = () => useQuery({
    queryKey: ['collectionChoices'],
    queryFn: fetchCollections,
    initialData: [],
})


export default useCollections;