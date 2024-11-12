import ReactColorPicker, { Color, ColorBlock } from '@rc-component/color-picker'
import Trigger from '@rc-component/trigger'
import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import builtinPlacements from './placements'
import '@rc-component/color-picker/assets/index.css'

interface IColorPickerProps {
  color: string
  onChange: (color: Color) => void
}

export const ColorPicker: React.FC<IColorPickerProps> = ({
  color,
  onChange,
}) => {
  const [value, setValue] = useState<Color>(new Color(color))
  const [inputText, setInputText] = useState(color)
  const [error, setError] = useState(false)

  useEffect(() => {
    setInputText(value.toHexString())
  }, [value])

  const onColorChanged = (color: Color) => {
    setError(false)
    setValue(color)
  }

  const inputOnBlur = () => {
    setValue(new Color(inputText))
    onChange(value)
  }

  return (
    <ReactColorPicker
      value={value}
      onChange={onColorChanged}
      onChangeComplete={onChange}
      panelRender={(panel) => (
        <>
          {panel}
          <TextField
            value={inputText}
            onChange={(e) => {
              const originValue = e.target.value
              setInputText(originValue)
              if (new Color(originValue).toHexString() !== originValue) {
                setError(true)
                return
              }
              onChange(new Color(originValue))
              setError(false)
            }}
            onBlur={inputOnBlur}
            error={error}
            helperText={error ? 'Invalid color' : ''}
          />
        </>
      )}
    />
  )
}

interface ColorPickerTriggerProps {
  color: string
  onChange: (color: string) => void
}

export const ColorPickerTrigger: React.FC<ColorPickerTriggerProps> = ({
  color,
  onChange,
}) => {
  return (
    <Trigger
      action={['click']}
      prefixCls="rc-color-picker"
      popupPlacement="bottomLeft"
      builtinPlacements={builtinPlacements}
      popup={
        <ColorPicker
          color={color}
          onChange={(color) => onChange(color.toHexString())}
        />
      }
    >
      <ColorBlock color={color} prefixCls="rc-color-picker" />
    </Trigger>
  )
}
