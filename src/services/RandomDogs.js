import { useState, useEffect } from 'react';
import axios from 'axios';

// total number of displayed dogs
const NUM_DOGS = 8;

// supported file types
const FILE_TYPE = ['jpg', 'gif', 'png', 'mp4'];

const useDogs = () => {
  const [dogs, setDogs] = useState([]);

  // fetch one dog file
  const getOneDog = async () => {
    let dogUrl = '';

    // try to fetch as most 10 times if gets unsupported files or some errors occur
    for (let i = 0; i < 10; i++) {
      try {
        const res = await axios.get('https://random.dog/woof.json');
        const fileType = res.data.url.split('.').pop();

        // check if it is supported file
        if (FILE_TYPE.includes(fileType.toLowerCase())) {
          dogUrl = res.data.url;
          break;
        }
      } catch (error) {
        console.log(error);
      }
    }

    return dogUrl;
  };

  const getAllDogs = async () => {
    // fetch all dogs concurrently
    const dogPromises = Array(NUM_DOGS).fill().map(getOneDog);
    // wait for all Promises to resolve
    const newDogs = await Promise.all(dogPromises);
    setDogs(newDogs);
  };

  useEffect(() => {
    getAllDogs();
  }, []);

  return { dogs, getAllDogs };
};

export default useDogs;
