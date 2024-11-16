import { ThemeOptions } from '@mui/material'
import { TEMPLATE_LOCAL_STORAGE } from 'src/constants/common'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ITemplateStore {
  theme: ThemeOptions | null
  setTheme: (theme: ThemeOptions) => void
}

export const useTemplateStore = create<ITemplateStore>()(
  persist(
    (set) => ({
      theme: null,
      setTheme(theme) {
        set({ theme })
      },
    }),
    {
      name: TEMPLATE_LOCAL_STORAGE,
      storage: createJSONStorage(() => localStorage),
    }
  )
)
