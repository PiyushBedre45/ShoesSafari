import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AlwaysIconic from './Components/AllShoesTypes/AlwaysIconic';
import AllShoes from './Components/AllShoesTypes/AllShoes';
import CategoryWiseShoes from './Components/Categories/CategoryWiseShoes';
import CategoryCard from './Components/Categories/CategoryCard';
import Product from './Components/AllShoesTypes/Product';
import BackgroundImages from './Components/BackgroundImages';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' index element={
            <>
              <Navbar />
              <BackgroundImages />
              <Home />
              <AlwaysIconic />
              <CategoryCard />
              <Footer />
            </>
          } />

          <Route path='/categori' index element={
            <>
              <CategoryCard />
            </>
          } />

          <Route path='/shoes' index element={
            <>
              <Navbar />
              <AllShoes />
              <Footer />

            </>
          } />

          <Route path='/product/regular/:cate' index element={
            <>

              <Navbar />
              <CategoryWiseShoes />

            </>

          } />

          <Route path='/product/:id' index element={
            <>

              <Navbar />
              <Product />


            </>

          } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
