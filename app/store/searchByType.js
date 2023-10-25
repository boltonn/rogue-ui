import { create } from "zustand";


const useSearchByTypeStore = create((set) => ({
    searchByType: false,
    toggleSearchByType: () =>
        set((state) => ({
            searchByType: !state.searchByType,
        })),
}));

export default useSearchByTypeStore;