import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './NavLink'

describe('NavLink', () => {
  it('should hightlight the nav link when the current page matches the link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          // using the concept of wrap we can test components that depends on providers
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          )
        },
      },
    )

    expect(wrapper.getByText('About').dataset.currenturl).toEqual('true')
    expect(wrapper.getByText('Home').dataset.currenturl).toEqual('false')
  })
})
