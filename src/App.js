import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import ItemContainer from './components/ItemContainer/ItemContainer';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <div>
          <ItemContainer 
          section='Productos destacados'
          />
        </div>
      </Container>
      {/* <Modal>
      <ItemContainer 
          section='Productos destacados'
          />
      </Modal> */}
    </div>
  );
}

export default App;
