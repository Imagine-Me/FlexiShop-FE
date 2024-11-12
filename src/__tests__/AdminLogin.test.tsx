import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { AdminLogin } from 'src/pages/admin/Login/AdminLogin'
import useAuthService from 'src/service/admin/authentication.service'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

// Mock the useAuthService hook
vi.mock('src/service/admin/authentication.service')

describe('AdminLogin', () => {
  const mockedUseAuthService = vi.mocked(useAuthService)

  const mockLogin = vi.fn()

  beforeEach(() => {
    mockedUseAuthService.mockReturnValue({
      isLoading: false,
      error: undefined,
      login: mockLogin,
      logout: () => {},
    })
  })

  it('renders the login form', () => {
    render(
      <BrowserRouter>
        <AdminLogin />
      </BrowserRouter>
    )

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByTestId(/login/)).toBeInTheDocument()
  })

  it('allows user to input email and password', () => {
    render(
      <BrowserRouter>
        <AdminLogin />
      </BrowserRouter>
    )

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password' } })

    expect(emailInput).toHaveValue('test@example.com')
    expect(passwordInput).toHaveValue('password')
  })

  it('calls login function with correct credentials on form submit', async () => {
    render(
      <BrowserRouter>
        <AdminLogin />
      </BrowserRouter>
    )

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const loginButton = screen.getByTestId(/login/)

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password' } })

    fireEvent.click(loginButton)

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password',
      })
    })
  })

  it('shows a loading indicator when isLoading is true', () => {
    mockedUseAuthService.mockReturnValue({
      isLoading: true,
      error: undefined,
      login: mockLogin,
      logout: () => {},
    })

    render(
      <BrowserRouter>
        <AdminLogin />
      </BrowserRouter>
    )

    const loginButton = screen.getByTestId(/login/)
    expect(loginButton).toBeDisabled()
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('displays an error message when login fails', async () => {
    mockedUseAuthService.mockReturnValue({
      isLoading: false,
      error: 'Login failed',
      login: mockLogin,
      logout: () => {},
    })

    render(
      <BrowserRouter>
        <AdminLogin />
      </BrowserRouter>
    )

    expect(screen.getByText(/login failed/i)).toBeInTheDocument()
  })
})
