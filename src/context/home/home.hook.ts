import React from 'react'
import { HomeContext, HomeContextState } from './home.context'

export const useHomeContext = (): HomeContextState => {
  const context = React.useContext(HomeContext)
  if (!context) {
    throw new Error('useHomeContext must be used within a HomeContextProvider')
  }
  return context
}
