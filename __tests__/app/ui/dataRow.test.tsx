import { render, screen } from '@testing-library/react'
import DataRow from '../../../src/app/ui/dataRow'
import '@testing-library/jest-dom'

describe('DataRow', () => {
  it('renders nothing with null colummns', () => {
    render(<DataRow row={null} columns={null} />)
    expect(() => screen.getAllByRole('row')).toThrow('Unable to find')
  })

  it('renders nothing with undefined colummns', () => {
    const slug = undefined
    render(<DataRow row={null} columns={slug} />)
    expect(() => screen.getAllByRole('row')).toThrow('Unable to find')
  })

  it('renders row', () => {
    render(
      <table>
        <thead>
          <DataRow
            row={{ id: '24', address: '1600 Grand Ave' }}
            columns={['id', 'address']}
          />
        </thead>
      </table>,
    )

    const row = screen.getByRole('row')

    expect(row.children.length).toBe(2)
    expect(row.children[0].textContent).toEqual('24')
    expect(row.children[1].textContent).toEqual('1600 Grand Ave')
  })

  it('renders row with transformations', () => {
    const obj = { city: 'Saint Paul', state: 'MN' }
    const text: string =
      'INTERIOR OF BUILDING - NO RESPONSE, UNABLE TO VERFY DETECTORS AND OCCUPANCY.'

    render(
      <table>
        <thead>
          <DataRow
            row={{ address: '1600 Grand Ave', geoaddress: obj, description: text }}
            columns={['id', 'address', 'geoaddress', 'description']}
          />
        </thead>
      </table>,
    )

    const row = screen.getByRole('row')

    expect(row.children.length).toBe(4)
    expect(row.children[0]?.textContent?.length).toBe(0)
    expect(row.children[1].textContent).toEqual('1600 Grand Ave')
    expect(row.children[2].textContent).toEqual('*object*')
    expect(row.children[3].textContent).toEqual(`${text.substring(0, 73)}...`)
  })
})
