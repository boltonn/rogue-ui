import { create } from "zustand";



const useCollectionStore = create((set) => ({
    collections: [],
    addCollection: (collection) =>
        set((state) => ({
            collections: [
                ...state.collections,
                collection,
            ],
        })),
    removeCollection: (toRemove) =>
        set((state) => ({
            collections: state.collections.filter((collection) => collection !== toRemove),
        })),
}));

export default useCollectionStore;