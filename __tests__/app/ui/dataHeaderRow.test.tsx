import { render, screen } from '@testing-library/react'
import DataHeaderRow from '../../../src/app/ui/dataHeaderRow'
import '@testing-library/jest-dom'

describe('DataHeaderRow', () => {
  it('renders nothing with no colummns', () => {
    render(<DataHeaderRow columns={[]} />)

    expect(() => screen.getAllByRole('columnheader')).toThrow('Unable to find')
  })

  it('renders colummns', () => {
    render(<DataHeaderRow columns={['id', 'address']} />)

    const ths = screen.getAllByRole('columnheader')

    expect(ths.length).toBe(2)
    expect(ths[0].textContent).toEqual('id')
    expect(ths[1].textContent).toEqual('address')
  })
})
