import useCollectionStore from "@/store/collections";


const CollectionCard = ({ name }) => {
    const { collections, addCollection, removeCollection } = useCollectionStore();

    const handleClick = (collection) => {
        if (collections.includes(collection)) {
            removeCollection(collection);
        } else {
            addCollection(collection);
        }
    };

    const isActive = collections.includes(name);

    return (
        <div 
            className={`
                w-auto m-4 mb-4 overflow-hidden rounded-lg cursor-pointer bg-gradient-to-br 
                ${isActive ? "from-purple to-blue" : "from-purple/[.35] to-blue/[.35]"}`}
            onClick={() => handleClick(name)}
        >
            <h3 className="px-4 font-semibold text-white">
                {name}
            </h3>
        </div>
    );
};

export default CollectionCard;