import { render, screen, fireEvent } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByTestId('test-id')
    const button = screen.getByRole('button')
    fireEvent.click(button);
    expect(button.textContent).toBe('Button - 1')
    expect(heading).toHaveTextContent('Hello word')
    // expect(button).toHaveTextContent('Hello')
    // expect(button).toBeDisabled()
    // expect(button).to
  })
})
