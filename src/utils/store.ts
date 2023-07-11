import { create } from "zustand";

interface Store {
    coordinates: string;
    setCoordinates: (coordinates: string) => void;
    tempCoordinates: string;
    setTempCoordinates: (coordinates: string) => void;
}

export const useStore = create<Store>((set) => ({
    coordinates: "-1.95 30.0588",
    setCoordinates(coordinates) {
        set({
            coordinates,
        });
    },
    tempCoordinates: "-1.95 30.0588",
    setTempCoordinates(coordinates) {
        set({
            tempCoordinates: coordinates,
        });
    },
}));
