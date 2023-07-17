import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard( { movie } ) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;