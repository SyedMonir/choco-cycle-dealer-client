import { useEffect, useState } from 'react';

const useInventory = () => {
  const [inventory, setInventory] = useState([]);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);
    fetch('https://choco-cycle-dealer.herokuapp.com/cycle')
      .then((response) => response.json())
      .then((data) => {
        setInventory(data);
        setSpinner(false);
      });
  }, []);
  return [inventory, spinner];
};

export default useInventory;
