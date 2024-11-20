import React from 'react'

import { useTemplateStore } from 'src/store/template.store'
import { useConfigStore } from 'src/store/config.store'
import { HomeComponentLazy } from 'src/components/dynamicComponents/HomeComponentLazy'

import classes from './home.module.css'

export const Home: React.FC = () => {
  const [home] = useTemplateStore((state) => [state.home])
  const [theme] = useConfigStore((state) => [state.theme])

  return (
    <div className={`${classes.body} ${classes[theme?.name ?? '']}`}>
      {home?.map((component, index) => (
        <div key={`component_${index}`} className={component.className}>
          <HomeComponentLazy {...component} />{' '}
        </div>
      ))}
    </div>
  )
}
