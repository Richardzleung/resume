import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TechnicalSkills from './TechnicalSkills';

describe('contact form', function() {
  test('renders', () => {
    // * default loadout
    const { getByText } = render(<TechnicalSkills />)
    expect(getByText('React')).toBeInTheDocument()
    
    // * button clicks
    const backEnd = getByText('Back-End')
    fireEvent.click(backEnd)
    expect(getByText('Express')).toBeInTheDocument()
    const database = getByText('Databases')
    fireEvent.click(database)
    expect(getByText('PostgreSQL')).toBeInTheDocument()
  })
});
