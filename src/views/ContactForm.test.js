import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('contact form', function() {
  test('renders', () => {
    const { getByText } = render(<ContactForm />)
    expect(getByText('Name')).toBeInTheDocument()
    expect(getByText('Have a question or want to work together?')).toBeInTheDocument()
    expect(getByText('Contact')).toBeInTheDocument()
  })
});
