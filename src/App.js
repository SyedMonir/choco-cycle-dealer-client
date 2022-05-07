import { Route, Routes } from 'react-router-dom';
// Toast
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import CycleDetails from './Pages/CycleDetails/CycleDetails';
import Home from './Pages/Home/Home';
import Footer from './Pages/SharedComponent/Footer/Footer';
import Header from './Pages/SharedComponent/Header/Header';
import Login from './Pages/SharedComponent/Login/Login';
import Signup from './Pages/SharedComponent/Signup/Signup';
import RequireAuth from './Pages/SharedComponent/RequireAuth/RequireAuth';
import Inventory from './Pages/Inventory/Inventory';
import ManageInventory from './Pages/ManageInventory/ManageInventory';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route
            path="/cycle/:cycleId"
            element={
              <RequireAuth>
                <CycleDetails />
              </RequireAuth>
            }
          />
          <Route
            path="/manage-inventory"
            element={
              <RequireAuth>
                <ManageInventory />
              </RequireAuth>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
