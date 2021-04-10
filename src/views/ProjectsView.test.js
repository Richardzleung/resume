import React from 'react';
import { render, screen } from '@testing-library/react';

import ProjectsPage from './ProjectsView'

describe('projects page', function() {
  test('renders', async () => {
    render(<ProjectsPage />)

    await screen.findByRole('heading', { level: 3 })

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Projects')
  })
});

