import { render, screen } from '@testing-library/react'
import DataHeaderRow from '../../../src/app/ui/dataHeaderRow'
import { addDateColumnOption } from '../../../src/app/ui/dataHeaderRow'
import '@testing-library/jest-dom'

let selected = []

function setSelected(slctd: string[]): void {
  selected = [...slctd]
}

describe('DataHeaderRow', () => {
  describe('addDateColumnOption', () => {
    it('adds value in the table header order', () => {
      const columns = ['id', 'address', 'date']
      const selected = ['id', 'date']
      const added = 'address'

      expect(addDateColumnOption(added, selected, columns)).toEqual(['id', 'address', 'date'])
      expect(selected.length).toEqual(2)
    })

    it('adds value when there are no others selected', () => {
      const columns = ['id', 'address', 'date']
      const selected: string[] = []
      const added = 'address'

      expect(addDateColumnOption(added, selected, columns)).toEqual(['address'])
      expect(selected.length).toEqual(0)
    })

    it('adds value correctly when multiple not shown', () => {
      const columns = ['id', 'address', 'date', 'assessor', 'code']
      const selected = ['assessor']
      const added = 'date'

      expect(addDateColumnOption(added, selected, columns)).toEqual(['date', 'assessor'])
      expect(selected.length).toEqual(1)
    })

    it('adds value correctly when added is last', () => {
      const columns = ['id', 'address', 'date', 'assessor', 'code']
      const selected = ['assessor']
      const added = 'code'

      expect(addDateColumnOption(added, selected, columns)).toEqual(['assessor', 'code'])
      expect(selected.length).toEqual(1)
    })

    it('ignores value that does not exist in columns', () => {
      const columns = ['id', 'address', 'date', 'assessor', 'code']
      const selected = ['id']
      const added = 'slug'

      expect(addDateColumnOption(added, selected, columns)).toEqual(['id'])    })
  })

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
