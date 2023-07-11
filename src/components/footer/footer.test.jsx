import React from 'react';
import { render } from '@testing-library/react';
import Footer from './footer';

describe('Footer Component', () => {
  it('renders the copyright message correctly', () => {
    const { getByText } = render(<Footer />);
    const copyrightMessage = getByText(/Copyright © 2023 All rights reserved/i);
    expect(copyrightMessage).toBeInTheDocument();
  });
});
  