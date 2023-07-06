import React from 'react';
import Header from './components/Header';
import useDogs from './services/RandomDogs';
import GenerateButton from './components/Button';
import DogCardGrid from './components/DogCardGrid';

function App() {
  const { dogs, getAllDogs } = useDogs();

  return (
    <div>
      <Header />
      <main>
        <GenerateButton getAllDogs={getAllDogs} />
        <DogCardGrid dogs={dogs} />
      </main>
    </div>
  );
}

export default App;
