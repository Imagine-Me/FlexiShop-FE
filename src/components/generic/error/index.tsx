import { Alert, Typography } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

interface IErrorProps {
  error?: string | string[]
}

export const Error: React.FC<IErrorProps> = ({ error }) => {
  if (!error) {
    return null
  }
  if (Array.isArray(error)) {
    return (
      <Alert
        icon={<ErrorOutlineIcon fontSize="inherit" />}
        severity="error"
        sx={{ mb: 2 }}
      >
        {error.map((error) => (
          <Typography key={error}>{error}</Typography>
        ))}
      </Alert>
    )
  }
  if (typeof error === 'string') {
    return (
      <Alert
        icon={<ErrorOutlineIcon fontSize="inherit" />}
        severity="error"
        sx={{ mb: 2 }}
      >
        {error}
      </Alert>
    )
  }
  return (
    <Alert
      icon={<ErrorOutlineIcon fontSize="inherit" />}
      severity="error"
      sx={{ mb: 2 }}
    >
      An error occurred. Please contact the administrator
    </Alert>
  )
}
