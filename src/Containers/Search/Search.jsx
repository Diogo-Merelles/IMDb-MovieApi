import React, { useEffect, useState } from "react";
import { getSearchedMovies } from "../../Services/apiCalls";
import "./Search.css";
import MovieDetail from "../../Components/MovieDetail/MovieDetail";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selected, setSelected] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    async function fecthData() {
      let response = await getSearchedMovies(searchInput);
      setMovies(response.data.results);
    }
    fecthData();
  }, [searchInput]);

  const selectMovie = (movie) => {
    setSelected(movie);
  };

  return (
    <div className="searchPage">
      <div className="leftside">
        <div className="searchBar">
          <input
            className="searchInput"
            placeholder="Type your movie"
            type="text"
            name="input"
            id="input"
            title="input"
            onChange={(e) => {
              handleSearchInput(e);
            }}
          ></input>
        </div>
      </div>
      <div className="showmovies">
      <div className="rightside">
        <div className="searchResults">
          {movies.map((movie) => {
            return (
              <div className="movieCard" key={movie.id}>
                <div onClick={() => selectMovie(movie)}>
                  <img
                    className="movieSmallImage"
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <div>{movie.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="clickMovie">
            {
                selected.id !== undefined &&
                <MovieDetail movie={selected} />
            }
      </div>
      </div>
    </div>
  );
};

export default Search;
