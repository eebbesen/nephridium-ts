import { render, screen } from '@testing-library/react'
import DataHeaderRow from '../../../src/app/ui/dataHeaderRow'
import '@testing-library/jest-dom'

let selected = []

function setSelected(slctd: string[]): void {
  console.log('setSelected called with', slctd)
  selected = [...slctd]
}

describe('DataHeaderRow', () => {
  it('renders nothing with no colummns', () => {
    render(<DataHeaderRow columns={[]} />)

    expect(() => screen.getAllByRole('columnheader')).toThrow('Unable to find')
  })

  it('renders colummns when selected', () => {
    render(
      <DataHeaderRow
        columns={['id', 'address']}
        selected={['id', 'address']}
        setSelected={setSelected}
      />,
    )
    const addressHeader = screen.getAllByRole('columnheader')[0]

    expect(addressHeader.className).toEqual('pe-1 ps-1 bg-black text-white')

    addressHeader.click()

    expect(addressHeader.className).toEqual('pe-1 ps-1 bg-blue-300 text-black')
  })

  it('renders colummns when not selected', () => {
    render(
      <DataHeaderRow
        columns={['id', 'address']}
        selected={[]}
        setSelected={setSelected}
      />,
    )

    const addressHeader = screen.getAllByRole('columnheader')[0]
    expect(addressHeader.className).toEqual('pe-1 ps-1 bg-blue-300 text-black')

    addressHeader.click()

    expect(addressHeader.className).toEqual('pe-1 ps-1 bg-black text-white')
  })
})
