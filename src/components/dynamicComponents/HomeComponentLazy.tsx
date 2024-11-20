import React from 'react'
import { useMemo } from 'react'
import { HomeComponents } from 'src/interfaces/components/home.interface'

export const HomeComponentLazy: React.FC<HomeComponents> = (props) => {
  const Component: any = useMemo(() => {
    switch (props.name) {
      case 'carousel1':
        return React.lazy(() =>
          import('./carousel/carousel1').then((module) => ({
            default: module.Carousel1,
          }))
        )
      case 'category1':
        return React.lazy(() =>
          import('./category/category1').then((module) => ({
            default: module.Category1,
          }))
        )
    }
  }, [props])

  return (
    <React.Suspense fallback="...">
      <Component data={props.data} />
    </React.Suspense>
  )
}
