import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'

import UserLandingPage from '../components/userLandingPage/UserLandingPage'

describe('User Landing Page', () => {
  it('should render the User Landing Page', () => {
    render(<UserLandingPage />)

    expect(screen.getByText(/Home/)).toBeInTheDocument()
  })
})
