import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HeaderComponent from './header'

describe('HeaderComponent', () => {
  const renderHeader = () => {
    return render(
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
    )
  }

  it('renders the logo and site name', () => {
    renderHeader()
    expect(screen.getByAltText('Rainbowfern logo')).toBeInTheDocument()
    expect(screen.getByText('Rainbowfern.com')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    renderHeader()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has a mobile menu button', () => {
    renderHeader()
    const menuButton = screen.getByRole('button')
    expect(menuButton).toBeInTheDocument()
  })
}) 