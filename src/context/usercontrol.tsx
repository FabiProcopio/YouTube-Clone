import { createContext } from "react";

interface UserControlValue {
    openUser: boolean;
    setOpenUser (value: boolean) : void;
}

export const UserControl = createContext<UserControlValue>({
    openUser: false,
    setOpenUser: (prev => !prev),
});


