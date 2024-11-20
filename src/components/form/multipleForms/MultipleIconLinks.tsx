import React from 'react'
import { IIconLinks } from 'src/interfaces/components/footer.interface'
import { MultipleForm } from '../multipleForm'
import { footerIconLinkData } from 'src/constants/data/footer.constant'
import { FormLink } from '../formLink'
import { IconPicker } from 'src/components/generic/iconPicker'

import classes from './MultipleIconLinks.module.css'
import { Card } from '@mui/material'

interface MultipleIconLinksProps {
  value: IIconLinks[]
  onChange: (value: IIconLinks[]) => void
}

export const MultipleIconLinks: React.FC<MultipleIconLinksProps> = ({
  value,
  onChange,
}) => {
  return (
    <Card sx={{ p: 2 }}>
      <MultipleForm
        value={value}
        defaultData={footerIconLinkData}
        label="Social Media Links"
        titleKey="title"
        onChange={onChange}
      >
        {(state, onChange) => {
          const { icon, ...linkProps } = state
          return (
            <>
              <IconPicker
                icon={icon}
                label="Social Media Icon"
                onChange={(newIcon) => onChange('icon', newIcon)}
                className={classes.marginBottom}
              />
              <FormLink
                link={linkProps}
                onChange={(key, value) => onChange(key, value)}
              />
            </>
          )
        }}
      </MultipleForm>
    </Card>
  )
}
