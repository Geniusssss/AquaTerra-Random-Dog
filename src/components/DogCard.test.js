import React from 'react';
import { render } from '@testing-library/react';
import DogCard from './DogCard';

describe('DogCard', () => {
  // test if an image rendered correctly
  it('image card test', () => {
    const { container } = render(<DogCard url="https://random.dog/c51308bb-bbff-4db2-98e7-a3711eafb598.jpg" />);
    const imgElement = container.querySelector('img');
    expect(imgElement).not.toBeNull();
    expect(imgElement).toHaveAttribute('src', 'https://random.dog/c51308bb-bbff-4db2-98e7-a3711eafb598.jpg');
  });

  // test if a video rendered correctly
  it('video card test', () => {
    const { container } = render(<DogCard url="https://random.dog/46b52bd5-a56c-4c0b-a881-46581ffe556f.mp4" />);
    const videoElement = container.querySelector('video');
    expect(videoElement).not.toBeNull();
    expect(videoElement).toHaveAttribute('src', 'https://random.dog/46b52bd5-a56c-4c0b-a881-46581ffe556f.mp4');
  });
});
