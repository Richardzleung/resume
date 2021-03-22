import React from 'react';
import { render } from '@testing-library/react';

import ProjectsPage from './ProjectsPage'

describe('projects page', function() {
  test('renders', () => {
    const { getByText } = render(<ProjectsPage />)
    expect(getByText('Rate Repository App')).toBeInTheDocument()
  })
});

