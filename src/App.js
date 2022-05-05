import { Route, Routes } from 'react-router-dom';
import CycleDetails from './Pages/CycleDetails/CycleDetails';
import Home from './Pages/Home/Home';
import Footer from './Pages/SharedComponent/Footer/Footer';
import Header from './Pages/SharedComponent/Header/Header';
import Login from './Pages/SharedComponent/Login/Login';
import Signup from './Pages/SharedComponent/Signup/Signup';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cycle/:cycleId" element={<CycleDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
