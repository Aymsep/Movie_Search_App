import React from 'react'
import './Movie.scss'
import movie_cover from '../Assets/movie1.jpg'
import movie_cover2 from '../Assets/movie2.jpg'
import {HiFilm} from 'react-icons/hi'

const Movie = ({cover,type,title,year}) => {
  return (
        <div className="app__movie-wrapper">

        <div className="app__movie-item">

            <img src={cover} alt="" />

            <div className="app__movie-info">

                <ul className="app__movie-details">
                    <li>{year}</li>
                    <li>
                        <HiFilm/>
                        {type}
                    </li>
                    <li>PG</li>
                </ul>

                <div className="app__movie-title">
                    <h1>{title}</h1>
                </div>

            </div>
            
        </div>
        </div>
  )
}

export default Movie