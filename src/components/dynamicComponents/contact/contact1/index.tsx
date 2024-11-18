import { Box, Typography } from '@mui/material'

import classes from './contact1.module.css'
import DynamicIcon from 'src/components/generic/dynamicIcon'

interface Contacts {
  icon: { name: string; type: string }
  header: string
  contact: string
}

export interface Contact1Props {
  title1: string
  title2: string
  contacts: Contacts[]
}

export const Contact1: React.FC<Contact1Props> = ({
  title1,
  title2,
  contacts,
}) => {
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
              <Typography variant="body2">{contact.header}</Typography>
              <Typography variant="h6">{contact.contact}</Typography>
            </div>
          </div>
        ))}
      </Box>
    </Box>
  )
}
