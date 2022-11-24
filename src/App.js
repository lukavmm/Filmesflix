import { useEffect, useState } from 'react';
import Moviecard from './Moviecard';
import './App.css';

function App() {
  const api_url = "https://api.themoviedb.org/3/movie/popular?api_key=bafd31f5246bf6e1eb6bc88aa18a6f46";
  const api_search = "https://api.themoviedb.org/3/search/movie?api_key=bafd31f5246bf6e1eb6bc88aa18a6f46&query="

  const [movies,setMovies] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(()=>{
    fetch(api_url)
    .then(res => res.json())
    .then(data =>setMovies(data.results))
  },[])
  
  console.log(movies)

  function handleSearch(e){
    e.preventDefault();

    fetch(api_search + term)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  }

  return (
    <div className="App">
      <div className="search-nav">
        <div className="movie-title">
          <h1>Movies</h1>
        </div>
        
        <div className='search-box'>
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
          </form>
        </div>

      </div>

      <div className="movies">
        {movies.map((movie)=> 
          <Moviecard {...movie}/>
        )}
      </div>

    </div>
  );
}

export default App;
