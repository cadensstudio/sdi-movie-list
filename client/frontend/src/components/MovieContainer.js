import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MovieContainer = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <Container>
      <Row className='row-cols-4 g-4'>
        {movies ? movies.map(movie => <Col key={movie.title}><MovieCard movie={movie} /></Col>) : null}
      </Row>
    </Container>
  );
}

export default MovieContainer;