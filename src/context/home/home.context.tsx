import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useMatch } from 'react-router-dom'
import { AdminUrls } from 'src/constants/routes.constant'
import { HomeComponents } from 'src/interfaces/components/home.interface'
import useTemplateService from 'src/service/template.service'
import { useConfigStore } from 'src/store/config.store'
import { useTemplateStore } from 'src/store/template.store'
import { v4 as uuidv4 } from 'uuid'

export interface HomeContextState {
  components: HomeComponents[]
  allComponents: HomeComponents[]
  isLoading: boolean
  setComponents: React.Dispatch<React.SetStateAction<HomeComponents[]>>
  saveComponent: () => void
  addComponent: (component: HomeComponents) => void
  deleteComponent: (id: string) => void
}

export const HomeContext = createContext<HomeContextState>({
  components: [],
  allComponents: [],
  isLoading: false,
  setComponents: () => {},
  saveComponent: () => {},
  addComponent: () => {},
  deleteComponent: () => {},
})

interface HomeContextProviderProps {
  children: React.ReactNode
}

export const HomeContextProvider: React.FC<HomeContextProviderProps> = ({
  children,
}) => {
  const isHomePage = useMatch(`/admin/${AdminUrls.HOME_PAGE}`)
  const isEditPage = useMatch(
    `/admin/${AdminUrls.HOME_PAGE}/${AdminUrls.HOME_PAGE_EDIT}`
  )

  const [theme] = useConfigStore((state) => [state.theme])
  const [home] = useTemplateStore((state) => [state.home])

  const [components, setComponents] = useState<HomeComponents[]>([])
  const [allComponents, setAllComponents] = useState<HomeComponents[]>([])

  const { getAllComponents, isLoading, updateHomeComponents } =
    useTemplateService()

  const addComponent = (component: HomeComponents) => {
    setComponents([...components, component])
  }

  const deleteComponent = (id: string) => {
    setComponents(components.filter((component) => id !== component.id))
  }

  const indexedComponents = useMemo(() => {
    return components.map((component) => ({
      ...component,
      id: component.id ?? uuidv4(),
    }))
  }, [components])

  useEffect(() => {
    if (home) {
      setComponents(structuredClone(home))
    }
  }, [home])

  useEffect(() => {
    getAllComponents()
      .then((data) => {
        data && setAllComponents(data)
      })
      .catch(console.log)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const saveComponent = useCallback(() => {
    if (theme?.name) updateHomeComponents(theme.name, components)
    // if (isHomePage && theme?.name) {
    //   // Update all components
    //   return
    // }

    // if (isEditPage) {
    //   // update cer
    //   return
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [components, isHomePage, isEditPage, theme])

  return (
    <HomeContext.Provider
      value={{
        components: indexedComponents,
        isLoading,
        allComponents,
        setComponents,
        saveComponent,
        addComponent,
        deleteComponent,
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}
