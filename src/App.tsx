import React, { useEffect } from 'react'
import { ThemeProvider } from 'src/theme'
import { AppRouter } from 'src/routes/routes'
import { useConfigStore } from './store/config.store'
import { Helmet } from './components/generic/helmet/Helmet'
import { useImageService } from './service/images.service'
import { AlertDialogProvider } from './context/alertDialog/alertDialog.context'

export const App: React.FC = () => {
  const { general } = useConfigStore()
  const { getImages } = useImageService()

  useEffect(() => {
    getImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {general && <Helmet data={general} />}
      <ThemeProvider>
        <AlertDialogProvider>
          <AppRouter />
        </AlertDialogProvider>
      </ThemeProvider>
    </>
  )
}
