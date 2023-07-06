import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  // test if header rendered correctly
  it('renders header text correctly', () => {
    const { getByText } = render(<Header />);
    expect(getByText('AquaTerra Random Dog Assignment')).toBeInTheDocument();
  });
});
