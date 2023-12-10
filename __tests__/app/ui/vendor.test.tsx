import { render, screen } from '@testing-library/react'
import Vendor from '../../../src/app/ui/vendor'
import '@testing-library/jest-dom'

describe('Vendor', () => {
  it('renders search components', () => {
    render(<Vendor vendor={'Humegatech'} />)

    const radioButton = screen.getByRole('radio')
    const label = screen.getByText(/Humegatech/)
    // const lable = screen.getByPlaceholderText('Enter URL to Dataset')

    expect(radioButton).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })
})
