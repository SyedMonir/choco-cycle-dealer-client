import { Route, Routes } from 'react-router-dom';
import CycleDetails from './Pages/CycleDetails/CycleDetails';
import Home from './Pages/Home/Home';
import Footer from './Pages/SharedComponent/Footer/Footer';
import Header from './Pages/SharedComponent/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cycle/:cycleId" element={<CycleDetails />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
