import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { IUserLoginModel } from 'src/interfaces/user.interface'

interface UserStore {
  data: IUserLoginModel | null
  setUser: (user: IUserLoginModel | null) => void
  removeUser: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      data: null,
      setUser(data) {
        set({ data })
      },
      removeUser() {
        set({ data: null })
      },
    }),
    { name: 'project_z_user', storage: createJSONStorage(() => sessionStorage) }
  )
)
