import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeaderMenuItem from './headerMenuItem';

describe('HeaderMenuItem Component', () => {
    it('renders the component with correct props', () => {
      const href = '/example';
      const text = 'Example Link';
      const handleOpen = jest.fn();
  
      const { getByText } = render(
        <MemoryRouter>
          <HeaderMenuItem href={href} text={text} handleOpen={handleOpen} />
        </MemoryRouter>
      );
  
      const linkElement = getByText(text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.getAttribute('href')).toBe(href);
    });
  });
  