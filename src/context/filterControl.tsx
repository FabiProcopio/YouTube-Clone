import { createContext } from "react";

interface FilterContextValue {
    openFilter: boolean;
    setOpenFilter (value: boolean) : void;
}

export const FilterContext = createContext<FilterContextValue>({
    openFilter: false,
    setOpenFilter: (prev => !prev),

});