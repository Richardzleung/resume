import React from 'react';
import { screen, render } from '@testing-library/react';
import AboutView from './AboutView';

describe('contact form', function() {
  test('renders', async () => {
    render(<AboutView />)

    await screen.findByRole('heading', { level: 2 })

    expect(screen.getByRole('heading')).toHaveTextContent('I am Richard Leung')
  })
});
