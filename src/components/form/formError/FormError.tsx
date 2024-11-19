import { Alert, AlertProps } from '@mui/material'

interface IFormErrorProps extends AlertProps {
  message?: string | string[]
}

export const FormError: React.FC<IFormErrorProps> = ({
  message,
  severity = 'error',
  ...alertProps
}) => {
  if (!message) return null
  return (
    <Alert severity={severity} {...alertProps}>
      {Array.isArray(message) ? (
        <ul style={{ paddingLeft: '15px' }}>
          {message.map((error, index) => (
            <li key={`error_${index}`}>{error}</li>
          ))}
        </ul>
      ) : (
        message
      )}
    </Alert>
  )
}
