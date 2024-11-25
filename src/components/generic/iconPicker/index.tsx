import * as ioIcons from 'react-icons/io'
import * as aiIcons from 'react-icons/ai'
import * as io5Icons from 'react-icons/io5'
import * as tbIcons from 'react-icons/tb'
import * as mdIcons from 'react-icons/md'
import * as faIcons from 'react-icons/fa'
import * as fa6Icons from 'react-icons/fa6'

import classes from './iconPicker.module.css'
import { IIcon } from 'src/interfaces/image.interface'
import SearchIcon from '@mui/icons-material/Search'
import { memo, useEffect, useState } from 'react'
import DynamicIcon from '../dynamicIcon'
import {
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  FormLabel,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'

const createIconObject = (icons: any) => {
  return Object.keys(icons).reduce(
    (acc, value) => {
      acc[value] = {
        pattern: value
          .replace(/([a-z])([A-Z])/g, '$1 $2') // Split between lowercase and uppercase
          .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2') // Handle consecutive uppercase letters
          .trim()
          .split(' '),
        component: icons[value],
      }
      return acc
    },
    {} as Record<string, { pattern: string[]; component: any }>
  )
}

const icons = {
  io: createIconObject(ioIcons),
  ai: createIconObject(aiIcons),
  io5: createIconObject(io5Icons),
  tb: createIconObject(tbIcons),
  md: createIconObject(mdIcons),
  fa: createIconObject(faIcons),
  fa6: createIconObject(fa6Icons),
}

const searchIcons = (str: string) => {
  if (str === '') {
    return Object.entries(icons.io)
      .filter((_, i) => {
        return i < 300
      })
      .map(([name, { component }]) => ({
        icon: { type: 'io', name },
        component,
      }))
  }

  const result = []

  const entries = Object.entries(icons)

  for (const [type, iconObject] of entries) {
    const iconEntries = Object.entries(iconObject)
    for (const [name, { component, pattern }] of iconEntries) {
      const regex = new RegExp(str, 'i') // 'i' makes it case-insensitive
      if (pattern.some((pattern) => regex.test(pattern))) {
        result.push({ icon: { type, name }, component })
      }
      if (result.length > 300) {
        break
      }
    }
  }
  return result
}

interface IconPickerProps {
  icon?: IIcon
  label: string
  description?: string
  onChange?: (icon: IIcon) => void
  className?: string
}

export const IconPicker: React.FC<IconPickerProps> = memo(
  ({ icon, label, description, onChange, className = '' }) => {
    const [state, setState] = useState(icon)
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [icons, setIcons] = useState(searchIcons(''))

    const onIconChange = (icon: (typeof icons)[0]) => {
      setState(icon.icon)
      onChange && onChange(icon.icon)
      setOpen(false)
    }

    useEffect(() => {
      const updatedIcons = searchIcons(search)
      setIcons(updatedIcons)
    }, [search])

    return (
      <>
        <FormLabel>{label}</FormLabel>
        <Typography sx={{ mb: 2 }}>{description}</Typography>

        <button
          onClick={() => setOpen(true)}
          className={`${classes.button} ${className}`}
        >
          <div className={classes.container}>Select Icon</div>
          {state ? <DynamicIcon iconName={state} size={34} /> : 'Select Icon'}
        </button>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullWidth
          maxWidth="xl"
        >
          <DialogTitle
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ backgroundColor: 'grey.100' }}
          >
            Select Icon
          </DialogTitle>
          <DialogContent
            className={classes.dialogContent}
            sx={{ minHeight: 200 }}
          >
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Search icons"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className={classes.iconContainer}>
              {icons.map((icon, index) => (
                <Card
                  key={index}
                  className={classes.icon}
                  onClick={() => onIconChange(icon)}
                >
                  <icon.component size={32} />
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </>
    )
  }
)
