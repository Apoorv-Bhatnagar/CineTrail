import React from 'react';
import { render } from '@testing-library/react';
import Error from './error';
import '@testing-library/jest-dom'

describe('Error Component', () => {
  it('renders error message correctly', () => {
    const { getByText } = render(<Error />);
    const errorMessage = getByText(
      /Sorry, we were unable to process your request/i
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
