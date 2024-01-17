import { render, screen, fireEvent } from '@testing-library/react'
import DataSearch from '../../../src/app/ui/dataSearch'
import '@testing-library/jest-dom'

let workingUrl = ''

function handleSubmit(): void {}

function setWorkingUrl(val: string): void {
  workingUrl = val
}

describe('DataSearch', () => {
  it('renders search components', () => {
    render(
      <DataSearch
        handleSubmit={handleSubmit}
        workingUrl=""
        setWorkingUrl={setWorkingUrl}
      />,
    )

    const button = screen.getByRole('button', {
      name: /Add Data/i,
    })
    const urlInput = screen.getByPlaceholderText('Enter URL to Dataset')

    expect(button).toBeInTheDocument()
    expect(urlInput).toBeInTheDocument()
  })

  it('sets workingUrl on change', () => {
    render(
      <DataSearch
        handleSubmit={handleSubmit}
        workingUrl=""
        setWorkingUrl={setWorkingUrl}
      />,
    )
    const urlInput = screen.getByPlaceholderText('Enter URL to Dataset')

    fireEvent.change(urlInput, { target: { value: 'https://puppies.biz' } })

    expect(workingUrl).toEqual('https://puppies.biz')
  })

  it('calls handleSubmit on Add Data click', () => {
    const handleSubmitSpy = jest.fn()
    render(
      <DataSearch
        handleSubmit={handleSubmitSpy}
        workingUrl="https://puppies.biz"
        setWorkingUrl={setWorkingUrl}
      />,
    )

    const button = screen.getByRole('button', {
      name: /Add Data/i,
    })
    button.click()

    expect(handleSubmitSpy).toHaveBeenCalled()
  })
})
