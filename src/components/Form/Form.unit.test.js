import React from 'react';
import { render, fireEvent, findByText } from '@testing-library/react';

import Form from './Form'

describe('form', function() {
  test('renders', () => {
    const { getByText } = render(<Form />)
    expect(getByText('Name')).toBeInTheDocument()
  })
  test('validation', async () => {
    const { getByText, container, getByLabelText } = render(<Form />)
    const input = getByLabelText('Email');

    fireEvent.change(input, { target: { value: 'foobar' } });
    fireEvent.click(getByText('Submit'));
    
    expect(await findByText(container, 'Name is required')).toBeVisible();
    expect(await findByText(container, 'Message is required')).toBeVisible();
    expect(await findByText(container, 'Email must be a valid email')).toBeVisible();
  })
});

