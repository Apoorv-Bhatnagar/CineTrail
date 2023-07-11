import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layout';


test('renders the Layout component', () => {
  render(
    <Router>
      <Layout />
    </Router>
  );

  const headerElement = screen.getByRole('banner');
  const mainElement = screen.getByTestId('main');
  const footerElement = screen.getByRole('contentinfo');

  expect(headerElement).toBeInTheDocument();
  expect(mainElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});

