import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('contact form', function() {
  test('renders', async () => {
    render(<ContactForm />)

    await screen.findByRole('heading', { level: 3 })

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Have a question or want to work together?')
  })
});
