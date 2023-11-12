import { crete } from "zustand";
import { persist } from "zustand/middleware";

const UserInfo = (set) => ({
    user: {},
    setUserInfo: (username, email) => {
        set(() => {
            const updatedUser = { username, email };
            return { user: updatedUser };
        });
    },
    removeUserInfo: () => {
        set({ user: {} });
    },
});

export const useUserInfo = crete(persist(UserInfo), { name: "user-info" });
