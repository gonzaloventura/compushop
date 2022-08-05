import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Details from './pages/Details';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import CartProvider from './context/CartContext';

function App() {

  // fetch('https://jsonplaceholder.typicode.com/users', {
  //   method: 'GET'
  // })
  // .then( (response) => {
  //   return response.json();
  // })
  // .then( (data) => {
  //   console.log(data);
  // })

      // A

  return (
    <CartProvider >
      <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/:category/:id" element={<Details />} />
              <Route path="/:category" element={<Category />} />
              <Route path="/:category/:brand" element={<Category />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
