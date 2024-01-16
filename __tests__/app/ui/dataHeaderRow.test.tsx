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

  it('renders colummn headers properly when selected', () => {
    render(
      <table>
        <thead>
          <DataHeaderRow
            columns={['id', 'address']}
            selected={['id', 'address']}
            setSelected={setSelected}
          />
        </thead>
      </table>,
    )
    const addressHeader = screen.getAllByRole('columnheader')[0]
    const idHeader = screen.getAllByRole('columnheader')[1]

    expect(addressHeader.className).toEqual('pe-1 ps-1 bg-black text-white')
    expect(idHeader.className).toEqual('pe-1 ps-1 bg-black text-white')

    addressHeader.click()

    expect(addressHeader.className).toEqual('pe-1 ps-1 bg-blue-300 text-black')
    expect(idHeader.className).toEqual('pe-1 ps-1 bg-black text-white')
  })

  it('renders colummns when not selected', () => {
    render(
      <table>
        <thead>
          <DataHeaderRow
            columns={['id', 'address']}
            selected={[]}
            setSelected={setSelected}
          />
        </thead>
      </table>,
    )

    const addressHeader = screen.getAllByRole('columnheader')[0]
    const idHeader = screen.getAllByRole('columnheader')[1]

    expect(addressHeader.className).toEqual('pe-1 ps-1 bg-blue-300 text-black')
    expect(idHeader.className).toEqual('pe-1 ps-1 bg-blue-300 text-black')

    addressHeader.click()

    expect(addressHeader.className).toEqual('pe-1 ps-1 bg-black text-white')
    expect(idHeader.className).toEqual('pe-1 ps-1 bg-blue-300 text-black')
  })
})
