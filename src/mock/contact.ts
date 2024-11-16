import { Contact1Props } from 'src/components/contact/contact1'

export const mockContact: Contact1Props = {
  title1: "We're always here to help",
  title2: 'You can get help by choosing from any of these options',
  contacts: [
    {
      icon: { name: 'AiOutlineQuestionCircle', type: 'ai' },
      header: 'Help Center',
      contact: 'help.mail.com',
    },
    {
      icon: { name: 'IoCallOutline', type: 'io5' },
      header: 'Phone',
      contact: '+91 9876543210',
    },
    {
      icon: { name: 'MdOutlineEmail', type: 'md' },
      header: 'Email Support',
      contact: 'help.mail.com',
    },
  ],
}
