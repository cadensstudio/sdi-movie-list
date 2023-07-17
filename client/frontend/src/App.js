import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './components/MovieCard';

import './App.css';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

function App() {
  return (
    <div className="App">
      <h1>Movies</h1>
      {movies.map(movie => <MovieCard movie={movie} />)}
    </div>
  );
}

export default App;
