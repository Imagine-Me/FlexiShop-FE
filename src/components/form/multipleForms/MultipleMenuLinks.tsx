import { Card, TextField } from '@mui/material'
import { ILinkMenu } from 'src/interfaces/components/footer.interface'
import { MultipleForm } from '../multipleForm'
import { footerLinkData } from 'src/constants/data/footer.constant'
import { linkData } from 'src/constants/data/common.constant'
import { FormLink } from '../formLink'

import classes from './MultipleMenuLinks.module.css'

interface IMultipleMenuLinks {
  value: ILinkMenu[]
  onChange: (value: ILinkMenu[]) => void
}

export const MultipleMenuLinks: React.FC<IMultipleMenuLinks> = ({
  value,
  onChange,
}) => {
  return (
    <Card sx={{ p: 2 }}>
      <MultipleForm
        value={value}
        label="Footer Links"
        titleKey="title"
        defaultData={footerLinkData}
        onChange={onChange}
      >
        {(state, onChange) => (
          <>
            <TextField
              value={state.title}
              onChange={(e) => onChange('title', e.target.value)}
              placeholder="Enter Menu Name"
              label="Name"
              helperText="Name for the link"
            />
            <div className={classes.container}>
              <MultipleForm
                value={state.links}
                label="Links"
                titleKey="title"
                defaultData={linkData}
                onChange={(value) => onChange('links', value)}
              >
                {(state, onChange) => (
                  <FormLink
                    link={state}
                    onChange={(link) => onChange('__default__', link)}
                  />
                )}
              </MultipleForm>
            </div>
          </>
        )}
      </MultipleForm>
    </Card>
  )
}
