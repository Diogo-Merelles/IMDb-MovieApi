import React, { useEffect, useState } from "react";
import { getSearchedMovies } from "../../Services/apiCalls";
import "./Search.css";
import MovieDetail from "../../Components/MovieDetail/MovieDetail";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selected, setSelected] = useState("");

  const handleSearchInput = (event) => {
    setSearchInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // -- Trying to show the same popular moview in both views, but blocks the search
  // useEffect(() => {
  //   async function fecthData() {
  //     let response = await getPopularMovies();
  //     setMovies(response.data.results);
  //   }
  //   fecthData();
  // },[movies]);

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
            placeholder="Search any movie!"
            type="text"
            name="input"
            id="input"
            title="input"
            onChange={(event) => {
              handleSearchInput(event);
            }}
          ></input>
        </div>
      </div>
      <div className="rightside">
        <div className="showContainer">
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
                <div>{movie.title}</div>
                </div>
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
