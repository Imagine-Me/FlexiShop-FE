import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { APP_NAME } from 'src/constants/common'

import {
  IConfigModel,
  IGeneralConfigData,
  IThemeConfigData,
} from 'src/interfaces/config.interface'
import { AppConfigUrls } from 'src/constants/urls.constant'

interface IConfigStore {
  general: IGeneralConfigData | null
  theme: IThemeConfigData | null
  setGeneral: (user: IGeneralConfigData | null) => void
  setConfigs: (configs: IConfigModel) => void
}

export const useConfigStore = create<IConfigStore>()(
  persist(
    (set) => ({
      general: null,
      theme: null,
      setGeneral(general) {
        set({ general })
      },
      setConfigs(configs) {
        configs.forEach((config) => {
          switch (config.name) {
            case AppConfigUrls.GENERAL:
              set({ general: config.data })
              break
            case AppConfigUrls.THEME:
              set({ theme: config.data })
              break
          }
        })
      },
    }),
    { name: APP_NAME, storage: createJSONStorage(() => localStorage) }
  )
)
