import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import { ConfigurableHeader } from 'src/components/header/configurableHeader'
import HomeIcon from '@mui/icons-material/Home'

describe('ConfigurableHeader', () => {
  it('renders the header with the provided header name', () => {
    render(
      <ConfigurableHeader
        headerName="Test Header"
        onMenuClick={() => {}}
        onProfileClick={() => {}}
        onCartClick={() => {}}
      />
    )

    const headerElement = screen.getByText(/Test Header/i)
    expect(headerElement).toBeInTheDocument()
  })

  it('triggers onMenuClick when the menu icon is clicked', () => {
    const handleMenuClick = vi.fn()
    render(
      <ConfigurableHeader
        headerName="Test Header"
        onMenuClick={handleMenuClick}
        onProfileClick={() => {}}
        onCartClick={() => {}}
      />
    )

    const menuButton = screen.getByLabelText(/menu/i)
    fireEvent.click(menuButton)

    expect(handleMenuClick).toHaveBeenCalledTimes(1)
  })

  it('triggers onProfileClick when the profile icon is clicked', () => {
    const handleProfileClick = vi.fn()
    render(
      <ConfigurableHeader
        headerName="Test Header"
        onMenuClick={() => {}}
        onProfileClick={handleProfileClick}
        onCartClick={() => {}}
      />
    )

    const profileButton = screen.getByLabelText(/profile/i)
    fireEvent.click(profileButton)

    expect(handleProfileClick).toHaveBeenCalledTimes(1)
  })

  it('triggers onCartClick when the cart icon is clicked', () => {
    const handleCartClick = vi.fn()
    render(
      <ConfigurableHeader
        headerName="Test Header"
        onMenuClick={() => {}}
        onProfileClick={() => {}}
        onCartClick={handleCartClick}
      />
    )

    const cartButton = screen.getByLabelText(/cart/i)
    fireEvent.click(cartButton)

    expect(handleCartClick).toHaveBeenCalledTimes(1)
  })

  it('renders the provided header icon', () => {
    render(
      <ConfigurableHeader
        headerIcon={HomeIcon}
        headerName="Test Header"
        onMenuClick={() => {}}
        onProfileClick={() => {}}
        onCartClick={() => {}}
      />
    )

    const homeIcon = screen.getByTestId('HomeIcon')
    expect(homeIcon).toBeInTheDocument()
  })
})
