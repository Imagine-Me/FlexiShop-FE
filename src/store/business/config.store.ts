import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { APP_NAME } from 'src/constants/common'

import {
  IConfigModel,
  ICustomGeneralModel,
  IThemePalette,
} from 'src/interfaces/config.interface'
import { AppConfigUrls } from 'src/constants/urls.constant'

interface IConfigStore {
  appTheme: IThemePalette | null
  general: ICustomGeneralModel['data'] | null
  setTheme: (user: IThemePalette | null) => void
  setGeneral: (user: ICustomGeneralModel['data'] | null) => void
  setConfigs: (configs: IConfigModel) => void
}

export const useConfigStore = create<IConfigStore>()(
  persist(
    (set) => ({
      appTheme: null,
      general: null,
      setTheme(appTheme) {
        set({ appTheme })
      },
      setGeneral(general) {
        set({ general })
      },
      setConfigs(configs) {
        configs.forEach((config) => {
          switch (config.name) {
            case AppConfigUrls.GENERAL:
              set({ general: config.data })
              break
            case AppConfigUrls.LIGHT_THEME:
              set({ appTheme: config.data })
              break
          }
        })
      },
    }),
    { name: APP_NAME, storage: createJSONStorage(() => localStorage) }
  )
)
