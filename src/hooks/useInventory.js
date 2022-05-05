import { useEffect, useState } from 'react';

const useInventory = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch('https://choco-cycle-dealer.herokuapp.com/cycle')
      .then((response) => response.json())
      .then((data) => setInventory(data));
  }, []);
  return [inventory];
};

export default useInventory;
