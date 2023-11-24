import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AlwaysIconic from './Components/AllShoesTypes/AlwaysIconic';
import CategoriCard from './Components/Categories/CategoriCard';

import AllShoes from './Components/AllShoesTypes/AllShoes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' index element={
            <>
              <Navbar />
              <Home />
              <AlwaysIconic />
              <CategoriCard />
              <Footer />
            </>
          } />

          <Route path='/categori' index element={
            <>
              <CategoriCard />
            </>
          } />

          <Route path='/shoes' index element={
            <>
              <Navbar />
              <AllShoes />
              <Footer />

            </>
          } />

          <Route path='/product/regular/men' index element={
            <>
              <AllShoes />
            </>

          } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
