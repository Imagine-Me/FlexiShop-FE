import { Box, Typography } from '@mui/material'

import classes from './contact1.module.css'
import DynamicIcon from 'src/components/generic/dynamicIcon'
import { Contact1Props } from 'src/interfaces/components/home.interface'

interface IContact1Props {
  data: Contact1Props
}

export const Contact1: React.FC<IContact1Props> = ({ data }) => {
  const { title1, title2, contacts } = data
  return (
    <Box className={classes.container}>
      <Box>
        <Typography variant="h5">{title1}</Typography>
        <Typography variant="body2">{title2}</Typography>
      </Box>
      <Box className={classes.contactContainer}>
        {contacts.map((contact, index) => (
          <div className={classes.contact} key={`contact_${index}`}>
            <DynamicIcon className={classes.icon} iconName={contact.icon} />
            <div>
              <Typography variant="body2">{contact.title}</Typography>
              <Typography variant="h6">{contact.contact}</Typography>
            </div>
          </div>
        ))}
      </Box>
    </Box>
  )
}
