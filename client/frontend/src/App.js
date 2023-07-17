import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MovieContainer from './components/MovieContainer';
import SearchBar from './components/SearchBar';

import './App.css';

const App = () => {

  

  return (
    <Container className='mt-5'>
      <SearchBar />
      <h1>Movies</h1>
      <MovieContainer />
    </Container>
  );
}

export default App;
