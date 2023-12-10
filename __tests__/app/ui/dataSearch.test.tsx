import { render, screen } from '@testing-library/react'
import DataSearch from '../../../src/app/ui/dataSearch'
import '@testing-library/jest-dom'

describe('DataSearch', () => {
  it('renders search components', () => {
    render(<DataSearch />)

    const button = screen.getByRole('button', {
      name: /Add Data/i,
    })
    const urlInput = screen.getByPlaceholderText('Enter URL to Dataset')

    expect(button).toBeInTheDocument()
    expect(urlInput).toBeInTheDocument()
  })
})