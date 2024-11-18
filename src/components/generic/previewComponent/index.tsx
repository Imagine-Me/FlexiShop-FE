import { Card } from '@mui/material'
import classes from './previewComponent.module.css'

interface IPreviewComponentProps {
  children: React.ReactNode
}

const PreviewComponent: React.FC<IPreviewComponentProps> = ({ children }) => {
  return (
    <Card elevation={20} className={classes.container}>
      {children}
    </Card>
  )
}

export default PreviewComponent
