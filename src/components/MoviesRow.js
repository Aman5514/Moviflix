import React, { useState, useEffect } from "react";
import "./MoviesRow.scss";
import axios from "axios";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function MoviesRow({ title, fetch }) {
  const [movies, setMovies] = useState([]);


useEffect(() => {
      async function fetchData() {
      const request = await axios.get(fetch);

      setMovies(request.data.results);
    }
    fetchData();
  }, [fetch]);

  return (
    <>
      <h3 className="row_title">{title}</h3>
      <div className="row_container">
        {movies.map((content) => (
          <>
            <div className="img_container">
              <img className="img"
                key={content.id}
                src={`${IMGPATH}${content.poster_path}`}
                alt={content.title}
              />
              <div className="img_data">
                <h3>{content.title}</h3>
                <p>{content.overview}</p>
                <div className="rating">
                  <div className="imdb">IMDB:<span className="vote">{` ${content.vote_average}`}</span></div>
                  <div>{`Release-date: ${content.release_date}`}</div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
export default MoviesRow;

