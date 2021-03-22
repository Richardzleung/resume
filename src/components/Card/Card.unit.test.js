import React from 'react';
import { render } from '@testing-library/react';

import Card from './Card'

describe('projects page', function() {
  test('renders', () => {
    const { getByText } = render(<Card projectID="PATIENATOR_APP"/>)
    expect(getByText('Track down your patients')).toBeInTheDocument()
  })
});

