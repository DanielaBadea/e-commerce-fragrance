import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/HomePage/Home';
import NavBar from '../NavBar/NavBar';
import Contacts from '../../Pages/Contacts/Contacts';
import Footer from '../Footer/Footer';
import ProductsDetails from '../../Pages/ProductsDetails/ProductsDetails';
import About from '../../Pages/About/About';
import ProductPage from '../../Pages/Products/GlobalProducts/ProductsPage';
import PageCategory from '../../Pages/Products/ProductsCategory/PageCategory';
import RegisterPage from '../../Pages/Register/Register';
import LoginPage from '../../Pages/Login/Login';
import { RestrictedRoute } from '../../configRoute/RestrictedRoute';
import { PrivateRoute } from '../../configRoute/PrivateRoute';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/products" component={<RegisterPage />} />} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/products" component={<LoginPage />} />} />
        <Route path="/products" element={<PageCategory />} />
        <Route path="/products/:productId" element={<ProductsDetails />} />
        <Route path="/products/category/:categoryName" element={<PageCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
};



export default App;
