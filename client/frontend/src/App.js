import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import MovieContainer from './components/MovieContainer';
import SearchBar from './components/SearchBar';

import './App.css';

const App = () => {

  const [url, setUrl] = useState('http://localhost:3001/movies');
  const [movies, setMovies] = useState([])

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

  return (
    <Container className='mt-5'>
      <SearchBar handleSearch={handleSearch} />
      <h1>Movies</h1>
      <MovieContainer movies={movies}/>
    </Container>
  );
}

export default App;
