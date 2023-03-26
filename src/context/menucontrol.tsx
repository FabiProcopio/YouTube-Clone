import { createContext } from "react";

interface MenuContextValue {
    openMenu: boolean;
    setOpenMenu (value: boolean) : void;
}

export const MenuContext = createContext<MenuContextValue>({
    openMenu: false,
    setOpenMenu: (prev => !prev),

});


