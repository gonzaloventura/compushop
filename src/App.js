import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

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



  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      {/* <Modal>
      <ItemListContainer 
          section='Productos destacados'
          />
      </Modal> */}
    </BrowserRouter>
  );
}

export default App;
