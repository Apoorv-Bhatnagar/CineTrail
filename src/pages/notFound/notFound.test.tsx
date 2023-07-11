import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './notFound';


test('renders the NotFound component', () => {
  render(
    <Router>
      <NotFound />
    </Router>
  );

  const titleElement = screen.getByText(/404 - Page not Found/i);
  const buttonElement = screen.getByRole('link', { name: /Go Home/i });

  expect(titleElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});