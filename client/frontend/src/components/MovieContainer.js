import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

const MovieContainer = ({ movies }) => {

  return (
    <Container>
      <Row className='row-cols-4 g-4'>
        {movies ? movies.map(movie => <Col key={movie.title}><MovieCard movie={movie} /></Col>) : null}
      </Row>
    </Container>
  );
}

export default MovieContainer;