import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GenerateButton from './Button';

describe('GenerateButton', () => {

  // test if discription rendered correctly
  it('discription test', () => {
    const { getByText } = render(<GenerateButton getAllDogs={() => {}} />);
    expect(getByText('Click button to generate new dogs')).toBeInTheDocument();
  });

  // test if button rendered correctly
  it('button test', () => {
    const getAllDogs = jest.fn();
    const { getByText } = render(<GenerateButton getAllDogs={getAllDogs} />);
    fireEvent.click(getByText('New Dogs'));
    expect(getAllDogs).toHaveBeenCalledTimes(1);
  });
});
