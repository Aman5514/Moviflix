import { Star } from '@material-ui/icons'
import React from 'react'
import "./Banner.scss"

export default function Banner({title,overview,imdb,date,image}) {
    return (
        <div className="banner">
             <img src={image}alt="" />
            <div className="img-data">
                <h4>{title}</h4>
                <p>{overview}</p>    
                <h3>
                    IMDB:<span>{imdb}</span>
                </h3>
                <p>
                   Release date: {date}
                </p>
            </div>
        </div>
    )
}
