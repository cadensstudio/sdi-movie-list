import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const MovieContainer = () => {
  return (
    <Container>
      <Row className='row-cols-4 g-4'>
        {movies.map(movie => <Col key={movie.title}><MovieCard movie={movie} /></Col>)}
      </Row>
    </Container>
  );
}

export default MovieContainer;