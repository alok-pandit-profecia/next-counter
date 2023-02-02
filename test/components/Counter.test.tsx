import { render, fireEvent, findByTestId } from '@testing-library/react'
import Counter from '../../components/Counter'
import '@testing-library/jest-dom/extend-expect'

describe('Counter', () => {
  it('displays the current count', () => {
    const { getByText } = render(<Counter />)

    expect(getByText('0')).toBeInTheDocument()
  })

  it('hides the count when the "Toggle" button is clicked', async () => {
    const { getByText, container } = render(<Counter />)

    fireEvent.click(getByText('Toggle Count'))

    const nameWrapper = await findByTestId(container, 'toggled');

    expect(nameWrapper.style.display).toBe('none')
  })
})
