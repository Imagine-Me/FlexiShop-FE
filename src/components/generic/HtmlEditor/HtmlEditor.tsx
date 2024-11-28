import { FormControl, FormHelperText, FormLabel } from '@mui/material'
import {
  BtnBold,
  BtnItalic,
  Editor,
  EditorProvider,
  Toolbar,
  BtnBulletList,
  BtnLink,
  BtnStrikeThrough,
  BtnNumberedList,
  BtnStyles,
} from 'react-simple-wysiwyg'

import classes from './HtmlEditor.module.css'

interface IHtmlEditorProps {
  label?: string
  value: string
  onChange: (value: string) => void
  helperText?: string
}

export const HtmlEditor: React.FC<IHtmlEditorProps> = ({
  onChange,
  value,
  helperText,
  label,
}) => {
  return (
    <EditorProvider>
      <FormControl className={classes.formControl}>
        {label && <FormLabel>{label}</FormLabel>}
        <Editor
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={classes.editor}
        >
          <Toolbar className="">
            <BtnBold />
            <BtnItalic />
            <BtnBulletList />
            <BtnLink />
            <BtnStrikeThrough />
            <BtnNumberedList />
            <BtnStyles />
          </Toolbar>
        </Editor>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </EditorProvider>
  )
}
