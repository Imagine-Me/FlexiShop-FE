import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  FormLabel,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useEffect, useState } from 'react'

import classes from './multipleForm.module.css'
import { capitalizeFirstLetter } from 'src/utils/string.utils'

interface MultipleFormProps<T> {
  children: (
    value: T,
    onFormChange: (key: keyof T, value: any) => void
  ) => React.ReactNode
  value: T[]
  label: string
  titleKey: string
  defaultData: T
  onChange?: (value: T[]) => void
}

export const MultipleForm = <T,>({
  children,
  value,
  label,
  titleKey,
  defaultData,
  onChange,
}: MultipleFormProps<T>) => {
  const [state, setState] = useState(structuredClone(value))

  const onFormChange = (index: number) => (key: keyof T, value: any) => {
    const updatedState = state.map((state, i) => {
      if (index === i) {
        const updatedState = { ...state }
        updatedState[key] = value
        return updatedState
      }
      return state
    })

    setState(updatedState)
  }

  const addNewRow = () => {
    const updatedState = [
      ...structuredClone(state),
      structuredClone(defaultData),
    ]
    setState(updatedState)
  }

  const removeRow = (index: number) => {
    const updatedState = state.filter((_, i) => i !== index)
    setState(updatedState)
  }

  useEffect(() => {
    if (onChange) {
      onChange(state)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return (
    <>
      <FormLabel sx={{ mb: 2 }}>{label}</FormLabel>
      <div className={classes.container}>
        {state.map((form, index) => (
          <Accordion key={`${label}_${index}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Box>
                <Typography variant="body1">
                  {(form[titleKey as keyof T] as string) ||
                    `${capitalizeFirstLetter(titleKey)} ${index + 1}`}
                </Typography>
              </Box>
            </AccordionSummary>
            <Divider />
            <AccordionDetails className={classes.accordionDetails}>
              {children(form, onFormChange(index))}
            </AccordionDetails>
            <AccordionActions>
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteOutlineIcon />}
                onClick={() => removeRow(index)}
              >
                Delete
              </Button>
            </AccordionActions>
          </Accordion>
        ))}

        <Button sx={{ mt: 2 }} startIcon={<AddIcon />} onClick={addNewRow}>
          Add
        </Button>
      </div>
    </>
  )
}