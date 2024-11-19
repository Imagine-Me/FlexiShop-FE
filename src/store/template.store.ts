import { ThemeOptions } from '@mui/material'
import { TEMPLATE_LOCAL_STORAGE } from 'src/constants/common'
import { IFooter } from 'src/interfaces/components/footer.interface'
import { IHeader } from 'src/interfaces/components/header.interface'
import { ITemplateStoreData } from 'src/interfaces/template.interface'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ITemplateStore {
  header: IHeader | null
  footer: IFooter | null
  theme: ThemeOptions | null
  setTheme: (theme: ThemeOptions) => void
  setTemplate: (template: ITemplateStoreData) => void
}

export const useTemplateStore = create<ITemplateStore>()(
  persist(
    (set) => ({
      theme: null,
      header: null,
      footer: null,
      setTheme(theme) {
        set({ theme })
      },
      setTemplate(template) {
        set(template)
      },
    }),
    {
      name: TEMPLATE_LOCAL_STORAGE,
      storage: createJSONStorage(() => localStorage),
    }
  )
)
