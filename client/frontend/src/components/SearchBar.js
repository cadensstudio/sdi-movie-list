import { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

const SearchBar = ({ handleSearch }) => {

  const [searchedMovie, setSearchedMovie] = useState('')

  return (
    <Form className="mb-3" onSubmit={(e) => handleSearch(e, searchedMovie)}>
      <InputGroup>
        <Form.Control
          placeholder="Search by movie title..."
          aria-label="Movie Title"
          aria-describedby="basic-addon2"
          onChange={(e) => setSearchedMovie(e.target.value)}
          value={searchedMovie}
        />
        <Button type="submit" variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;