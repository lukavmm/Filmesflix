import React from 'react';
import './Moviecard.css'

function Moviecard(props){
    
    const api_img = "https://image.tmdb.org/t/p/w500/"

    return(
        <div className='Card'>
            <div className="poster">
                <img src={props.poster_path ? api_img + props.poster_path : "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpbmVtYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="No poster" />
            </div>

            <div className="info">
                <p className='title'>{props.title}</p>
                <p className='vote'>{props.vote_average}</p>
            </div>

            <div className='overview'>
                <h2 className='title_overview'>Overview:</h2>
                <h3 className='overview-info'>{props.overview ? props.overview : "No overview"}</h3>
            </div>

        </div>
    )
}
export default Moviecard;