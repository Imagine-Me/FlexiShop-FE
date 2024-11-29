import { adminPagesUrls } from 'src/constants/routes.constant'
import { PageWrapper } from '../../Landing/PageWrapper'
import PreviewComponent from 'src/components/generic/previewComponent'
import { useHomeContext } from 'src/context/home/home.hook'
import { useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import {
  Carousel1 as Carousel1Props,
  Category1 as Category1Props,
  Contact1Props,
  HomeComponents,
  ProductTile as ProductTileProps,
  Tile1Props,
  Tile2Props,
} from 'src/interfaces/components/home.interface'

// components
import { Carousel1 } from 'src/components/dynamicComponents/carousel'
import { Category1 } from 'src/components/dynamicComponents/category'
import { Contact1 } from 'src/components/dynamicComponents/contact'
import {
  ProductTile,
  Tile1,
  Tile2,
} from 'src/components/dynamicComponents/tiles'
import { FormBuilder } from 'src/components/form/formBuilder/FormBuilder'
import { getComponentSchema } from 'src/constants/formSchema/components'
import { Button } from '@mui/material'

export const EditComponent = () => {
  const { id } = useParams()
  const { getComponent, setComponents, components, isLoading, saveComponent } =
    useHomeContext()
  const currentComponent = useMemo(() => {
    return getComponent(id!)
  }, [id, getComponent])

  const [state, setState] = useState<HomeComponents['data'] | undefined>(
    undefined
  )

  useEffect(() => {
    if (currentComponent) {
      setState(structuredClone(currentComponent.data))
    }
  }, [currentComponent])

  useEffect(() => {
    if (state && currentComponent) {
      const updatedComponents = components.map((component) => {
        if (component.id === currentComponent?.id) {
          component.data = state!
        }
        return component
      })
      setComponents(updatedComponents)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  const renderComponent = useMemo(() => {
    if (!state) return null
    switch (currentComponent?.name) {
      case 'carousel1':
        return <Carousel1 data={state as Carousel1Props} />
      case 'category1':
        return <Category1 data={state as Category1Props} />
      case 'contact1':
        return <Contact1 data={state as Contact1Props} />
      case 'productTile':
        return <ProductTile data={state as ProductTileProps} />
      case 'tile1':
        return <Tile1 data={state as Tile1Props} />
      case 'tile2':
        return <Tile2 data={state as Tile2Props} />
      default:
        return null
    }
  }, [state, currentComponent])

  return (
    <PageWrapper
      breadcrumbs={[
        { title: 'Pages' },
        { title: 'Home', link: `/admin/${adminPagesUrls.home.main}` },
        { title: 'Edit' },
      ]}
      footer={{
        left: <Button>Back to Component</Button>,
        right: (
          <Button
            variant="contained"
            disabled={isLoading}
            onClick={saveComponent}
          >
            Update
          </Button>
        ),
      }}
    >
      <PreviewComponent>{renderComponent}</PreviewComponent>
      {state && currentComponent && (
        <FormBuilder
          schema={getComponentSchema(currentComponent.name)!}
          value={state}
          onChange={setState}
        />
      )}
    </PageWrapper>
  )
}
