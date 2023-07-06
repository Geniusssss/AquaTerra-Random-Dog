import React from 'react';
import { render } from '@testing-library/react';
import DogCardGrid from './DogCardGrid';

describe('DogCardGrid', () => {
  // test if the number of elements rendered in the grid is correct
  // test if there is an image element rendered correctly
  it('dog card grip test', () => {
    const dogs = ["https://random.dog/2bc7df24-892a-43aa-a3de-eab849336cf4.jpg", 
        "https://random.dog/eb6afea1-02d9-413e-babf-b75ff2426006.jpg"];
    const { container } = render(<DogCardGrid dogs={dogs} />);
    const imgElements = container.querySelectorAll('img');
    expect(imgElements.length).toBe(dogs.length);
    imgElements.forEach((imgElement, index) => {
      expect(imgElement).toHaveAttribute('src', dogs[index]);
    });
  });
});