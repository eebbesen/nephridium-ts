import { render, screen } from '@testing-library/react'
import Output from '../../../src/app/ui/output'
import '@testing-library/jest-dom'

describe('Output', () => {
  it('renders URL with all elements', () => {
    render(<Output columns={['id', 'date', 'description', 'address']}
      selected={['id', 'date', 'description']}
      selectedDateColumn={'date'}
      url={'https://some.domain.biz.json?$limit=3'} />)

    const urlFragment = screen.getByText(/domain.biz/).textContent

    expect(urlFragment).toEqual('&time_column=date&to_remove=address&url=https://some.domain.biz.json')
  })

  it('renders URL without selectedDateColumn', () => {
    render(<Output columns={['id', 'date', 'description', 'address']}
      selected={['id', 'date', 'description']}
      selectedDateColumn={''}
      url={'https://some.domain.biz.json?$limit=3'} />)

    const urlFragment = screen.getByText(/domain.biz/).textContent

    expect(urlFragment).toEqual('&to_remove=address&url=https://some.domain.biz.json')
  })

  it('renders URL without removed columns', () => {
    render(<Output columns={['id', 'date', 'description', 'address']}
      selected={['id', 'date', 'description', 'address']}
      selectedDateColumn={'date'}
      url={'https://some.domain.biz.json?$limit=3'} />)

    const urlFragment = screen.getByText(/domain.biz/).textContent

    expect(urlFragment).toEqual('&time_column=date&url=https://some.domain.biz.json')
  })
})
