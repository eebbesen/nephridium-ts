import { render, screen } from '@testing-library/react'
import DataTable from '../../../src/app/ui/dataTable'
import '@testing-library/jest-dom'

describe('DataTable', () => {
  it('renders component', () => {
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

    render(
      <DataTable
        data={data}
        columns={['id', 'address', 'status', 'description']}
      />,
    )

    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(3)
  })
})
