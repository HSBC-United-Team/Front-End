import { create } from "zustand";
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

export const useUserInfo = create(persist(UserInfo, { name: "user-info" }));
