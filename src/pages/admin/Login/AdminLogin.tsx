import { FormEvent, useState } from 'react'
import { IUserLoginCredentials } from 'src/interfaces/user.interface'
import useAuthService from 'src/service/authentication.service'
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { FormError } from 'src/components/form/formError/FormError'
import CircularProgress from '@mui/material/CircularProgress'

const StyledContainer = styled(Container)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  bgcolor: theme.palette.background.paper,
}))

export function AdminLogin() {
  const [credentials, setCredentials] = useState<IUserLoginCredentials>({
    email: '',
    password: '',
  })
  const { isLoading, error, login } = useAuthService()

  const handleLoginClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await login(credentials)
  }
  return (
    <Box position="relative" sx={{ height: '100vh' }}>
      <StyledContainer maxWidth="xs" sx={{ position: 'absolute' }}>
        <Paper elevation={3} sx={{ padding: 8 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Admin Login
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ my: 3 }}
              onSubmit={handleLoginClick}
            >
              {error && <FormError message={error} sx={{ mb: 5 }} />}
              <TextField
                sx={{ mb: 3 }}
                required
                id="email"
                label="Email"
                name="email"
                autoFocus
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
              <TextField
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                data-testid="login"
                sx={{ mt: 5 }}
                disabled={isLoading}
              >
                {isLoading ? <CircularProgress size={24} /> : 'Login'}
              </Button>
            </Box>
          </Box>
        </Paper>
      </StyledContainer>
    </Box>
  )
}
