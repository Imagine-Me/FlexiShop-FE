import { useContext } from 'react'
import {
  AlertDialogContext,
  AlertDialogContextState,
} from './alertDialog.context'

export const useAlertDialogContext = (): AlertDialogContextState => {
  const context = useContext(AlertDialogContext)
  if (!context) {
    throw new Error(
      'useAlertDialogContext must be used within an AlertDialogContextProvider'
    )
  }
  return context
}
