import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider } from 'react-query'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '@/lib/react-query'

import { SignIn } from './signin'

describe('SignIn', () => {
  it('should set default email input value if email is present on search params', () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        // using the concept of wrap we can test components that depends on providers
        return (
          <MemoryRouter initialEntries={['/signin?email=teste@teste.com']}>
            <HelmetProvider>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </HelmetProvider>
          </MemoryRouter>
        )
      },
    })

    expect(wrapper.getByLabelText('E-mail')).toHaveValue('teste@teste.com')
  })
})
