import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('contact form', function() {
  test('renders', async () => {
    render(<ContactForm />)

    await screen.findByRole('heading', { level: 3 })

    expect(screen.getByRole('heading')).toHaveTextContent('Contact')
  })
});
