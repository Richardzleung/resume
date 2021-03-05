import { render, fireEvent, findByText } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('contact form', function() {
  test('renders', () => {
    const { getByText } = render(<ContactPage />)
    expect(getByText('Name')).toBeInTheDocument()
  })
  test('validation', async () => {
    const { getByText, container, getByLabelText, debug } = render(<ContactPage />)
    const input = getByLabelText('Email');

    fireEvent.change(input, { target: { value: 'foobar' } });
    fireEvent.click(getByText('Submit'));
    
    expect(await findByText(container, 'Name is required')).toBeVisible();
    expect(await findByText(container, 'Message is required')).toBeVisible();
    expect(await findByText(container, 'Email must be a valid email')).toBeVisible();
  })
});
