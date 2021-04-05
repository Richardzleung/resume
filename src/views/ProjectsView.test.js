import React from 'react';
import { render } from '@testing-library/react';

import ProjectsPage from './ProjectsView'

describe('projects page', function() {
  test('renders', () => {
    const { getByText } = render(<ProjectsPage />)
    expect(getByText('Rate Repository App')).toBeInTheDocument()
  })
});

