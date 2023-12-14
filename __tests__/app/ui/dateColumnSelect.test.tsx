import { render, screen, fireEvent } from '@testing-library/react'
import DateColumnSelect from '../../../src/app/ui/dateColumnSelect'
import '@testing-library/jest-dom'

describe('DateColumnSelect', () => {
  function setSelectedDateColumn(dateColumn: string): void {
    console.log('setSelectedDateColumn called')
  }

  it('renders select with non-default selection', () => {
    render(
      <DateColumnSelect
        selected={['id', 'date', 'description']}
        selectedDateColumn={'date'}
        setSelectedDateColumn={setSelectedDateColumn}
      />,
    )

    const select: HTMLSelectElement = screen.getByRole('combobox')

    expect(select.options.length).toBe(4)
    expect(select.options[2].text).toBe('date')
    expect(select.options[2].selected).toBe(true)
    expect(select.options[0].selected).toBe(false)
  })

  it('renders select with default selection', () => {
    render(
      <DateColumnSelect
        selected={['id', 'date', 'description']}
        selectedDateColumn={''}
        setSelectedDateColumn={setSelectedDateColumn}
      />,
    )

    const select: HTMLSelectElement = screen.getByRole('combobox')

    expect(select.options.length).toBe(4)
    expect(select.options[2].text).toBe('date')
    expect(select.options[2].selected).toBe(false)
    expect(select.options[0].selected).toBe(true)
  })

  it('handles column selection', () => {
    const setSelectedDateColumnSpy = jest.fn()
    render(
      <DateColumnSelect
        selected={['id', 'date', 'description']}
        selectedDateColumn={''}
        setSelectedDateColumn={setSelectedDateColumnSpy}
      />,
    )

    const select: HTMLSelectElement = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'date' } })

    expect(setSelectedDateColumnSpy).toHaveBeenCalledWith('date')
  })
})
