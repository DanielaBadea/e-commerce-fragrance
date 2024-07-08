import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/HomePage/Home';
import NavBar from '../NavBar/NavBar';
import Products from '../../Pages/Products/GlobalProducts/Products';
import ProductsWoman from '../../Pages/Products/ProductsWoman/ProductsWoman';
import ProductsMen from '../../Pages/Products/ProductsMen/ProductsMen';
import ProductsHome from '../../Pages/Products/ProductsHome/ProductsHome';
import Contacts from '../../Pages/Contacts/Contacts';
import Footer from '../Footer/Footer';
import ProductsDetails from '../../Pages/ProductsDetails/ProductsDetails';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductsDetails />} />
        <Route path="products/women" element={<ProductsWoman />} />
        <Route path="products/men" element={<ProductsMen />} />
        <Route path="products/home" element={<ProductsHome />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}



export default App;
