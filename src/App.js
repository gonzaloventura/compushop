import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div>
      <NavBar />
      <Container>
      <h1 className='text-xxl'>
        Hola Mundo
      </h1>
      </Container>
    </div>
  );
}

export default App;
