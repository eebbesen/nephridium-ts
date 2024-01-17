import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import DataTable, { createKey }  from '../../../src/app/ui/dataTable'
import '@testing-library/jest-dom'

describe('DataTable', () => {
  const data: any[] = [
    {
      id: '15',
      address: '1600 Grand Ave',
      status: 'OPEN',
      description: 'complaint',
    },
    {
      id: '203',
      address: '461 Dale St N',
      status: 'CLOSED',
      description: 'praise',
    },
  ]

  const noId = [...data]
  noId.forEach(r => delete r.id)

  describe('createKey', () => {
    it('creates key with id', () => {
      const row = {id: 1, address: '123 Main St'}

      expect(createKey(row, 22)).toEqual(1)
    })

    it('creates key with date when no id', () => {
      const row = {address: '123 Main St'}

      // 170553082 7661

      const now = Date.now() * 22
      const slug = now.toString().substring(0,9)

      const ret = createKey(row, 22)
      const key = ret.toString()

      expect(key.substring(0,9)).toEqual(slug)
    })
  })

  it('renders component', () => {
    render(
      <DataTable
        data={data}
        columns={['id', 'address', 'status', 'description']}
        url={''}
      />,
    )

    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(3)

    const toggleButtonDeselect = screen.getByRole('button', {
      name: /Deselect/,
    })
    act(() => { toggleButtonDeselect.click() });
  })

  it('renders component without ID', () => {
    render(
      <DataTable
        data={noId}
        columns={['address', 'status', 'description']}
        url={''}
      />,
    )

    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(3)

    const toggleButtonDeselect = screen.getByRole('button', {
      name: /Deselect/,
    })
    act(() => { toggleButtonDeselect.click() });
  })

  it('Des/Select All on initial load and executes appropriately', () => {
    render(
      <DataTable
        data={data}
        columns={['id', 'address', 'status', 'description']}
        url={''}
      />,
    )
    const idRow: HTMLElement = screen.getAllByText('id')[1]
    const addressRow: HTMLElement = screen.getAllByText('address')[1]
    const statusRow: HTMLElement = screen.getAllByText('status')[1]
    const descriptionRow: HTMLElement = screen.getAllByText('description')[1]

    expect(idRow).toHaveClass('bg-black')
    expect(addressRow).toHaveClass('bg-black')
    expect(statusRow).toHaveClass('bg-black')
    expect(descriptionRow).toHaveClass('bg-black')

    // Deselect All
    const toggleButtonDeselect = screen.getByRole('button', {
      name: /Deselect/,
    })
    act(() => { toggleButtonDeselect.click() });

    expect(idRow).toHaveClass('bg-blue-300')
    expect(addressRow).toHaveClass('bg-blue-300')
    expect(statusRow).toHaveClass('bg-blue-300')
    expect(descriptionRow).toHaveClass('bg-blue-300')

    // Select All
    const toggleButtonSelect = screen.getByRole('button', {
      name: /Select/,
    })
    act(() => { toggleButtonSelect.click() });

    expect(idRow).toHaveClass('bg-black')
    expect(addressRow).toHaveClass('bg-black')
    expect(statusRow).toHaveClass('bg-black')
    expect(descriptionRow).toHaveClass('bg-black')
  })
})
