import React, { createContext, useEffect, useState } from 'react'
import { HomeComponents } from 'src/interfaces/components/home.interface'
// import { useConfigStore } from 'src/store/config.store'
import { useTemplateStore } from 'src/store/template.store'

export interface HomeContextState {
  components: HomeComponents[]
}

export const HomeContext = createContext<HomeContextState>({
  components: [],
})

interface HomeContextProviderProps {
  children: React.ReactNode
}

export const HomeContextProvider: React.FC<HomeContextProviderProps> = ({
  children,
}) => {
  // const [theme] = useConfigStore((state) => [state.theme])
  const [home] = useTemplateStore((state) => [state.home])

  const [components, setComponents] = useState<HomeComponents[]>([])

  useEffect(() => {
    if (home) {
      setComponents(structuredClone(home))
    }
  }, [home])

  return (
    <HomeContext.Provider
      value={{
        components,
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}
