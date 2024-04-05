import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order status', () => {
  it('should display the right text based on order status', () => {
    /* Pending */
    let wrapper = render(<OrderStatus status="pending" />)

    // this displays the redenred component in the console
    // wrapper.debug()

    expect(wrapper.getByText('Pendente')).toBeInTheDocument()

    /* Canceled */
    wrapper = render(<OrderStatus status="canceled" />)
    expect(wrapper.getByText('Cancelado')).toBeInTheDocument()

    /* Delivered */
    wrapper = render(<OrderStatus status="delivered" />)
    expect(wrapper.getByText('Entregue')).toBeInTheDocument()

    /* Delivering */
    wrapper = render(<OrderStatus status="delivering" />)
    expect(wrapper.getByText('Em entrega')).toBeInTheDocument()

    /* processing */
    wrapper = render(<OrderStatus status="processing" />)
    expect(wrapper.getByText('Em preparo')).toBeInTheDocument()
  })
})
