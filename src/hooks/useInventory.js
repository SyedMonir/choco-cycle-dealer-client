import { useEffect, useState } from 'react';

const useInventory = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/cycle')
      .then((response) => response.json())
      .then((data) => setInventory(data));
  }, []);
  return [inventory];
};

export default useInventory;
