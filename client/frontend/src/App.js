import { useEffect, useState } from 'react';
import { Container, Modal, Button, Form } from 'react-bootstrap';
import MovieContainer from './components/MovieContainer';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {

  const [url, setUrl] = useState('http://localhost:3001/movies');
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.error(err))
  }, [url])

  const handleSearch = (e, searchedMovie) => {
    e.preventDefault();
    let searchedMovieParam = searchedMovie.replaceAll(' ', '-');
    setUrl(`http://localhost:3001/movies?movieTitle=${searchedMovieParam}`)
  }

  const handleAdd = (e) => {
    e.preventDefault();
    handleClose();
  }

  return (
    <Container className='mt-5'>

      <Button variant="primary" onClick={handleShow} className='mb-3'>
        Add Movie
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form onSubmit={handleAdd}>
            <Form.Group className="mb-3" controlId="formMovieTitle">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control type="text" placeholder="Enter a movie title" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Movie
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <SearchBar handleSearch={handleSearch} />
      <h1>Movies</h1>
      <MovieContainer movies={movies}/>
    </Container>
  );
}

export default App;
