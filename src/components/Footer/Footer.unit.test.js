import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Footer from './Footer'

describe('projects page', function() {
  test('renders', () => {
    const { getByLabelText, getByTitle } = render(<Footer />)

    fireEvent.mouseOver(getByLabelText('Facebook'))
    expect(getByTitle('RichardLeung13')).toBeVisible()
  })
});

