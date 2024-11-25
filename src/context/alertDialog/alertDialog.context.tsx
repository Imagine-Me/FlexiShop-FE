import {
  Button,
  ButtonProps,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { createContext, useRef, useState } from 'react'
import { AnyFunction } from 'src/interfaces/components/common.interface'

export interface AlertDialogContextState {
  showDialog: (
    title: string,
    description: string,
    action?: AnyFunction,
    variant?: ButtonProps['color']
  ) => void
}

export const AlertDialogContext = createContext<AlertDialogContextState>({
  showDialog: () => null,
})

interface AlertDialogProviderProps {
  children: React.ReactNode
}
export const AlertDialogProvider: React.FC<AlertDialogProviderProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState({
    title: '',
    description: '',
    variant: 'error',
  })

  const handleClose = () => setOpen(false)

  const actionRef = useRef<null | AnyFunction>(null)

  const showDialog = (
    title: string,
    description: string,
    action?: AnyFunction,
    variant: ButtonProps['color'] = 'error'
  ) => {
    setText({ title, description, variant })
    setOpen(true)
    if (action) {
      actionRef.current = action
    }
  }

  const onProceed = async () => {
    setIsLoading(true)
    if (actionRef.current) {
      await actionRef.current()
    }
    setIsLoading(false)
    handleClose()
  }

  return (
    <AlertDialogContext.Provider value={{ showDialog }}>
      {children}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{text.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button
            onClick={onProceed}
            autoFocus
            color={text.variant as ButtonProps['color']}
            variant="contained"
            startIcon={
              isLoading && <CircularProgress size={16} color="inherit" />
            }
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </AlertDialogContext.Provider>
  )
}
