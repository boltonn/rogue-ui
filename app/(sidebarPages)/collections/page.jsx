'use client'
import useCollections from "@/hooks/useCollections";
import CollectionCard from "./CollectionCard";

export default function Collections() {

    const { data: collectionChoices, isLoading, isError } = useCollections();

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Error: </p>;
    }

    return (
        <div className="flex flex-wrap m-4">
            {collectionChoices.map(collectionChoice => (
                <CollectionCard key={collectionChoice} name={collectionChoice}/>
            ))}
        </div>
    )
}
