import { useState, useEffect } from "react";
import "./movie.css";

const Movie = ({title,items}) =>{

    console.log(items); 

    return (
         
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {items.length > 0 && items.map((item, key) => (
                        <div className="movieRow--item" key={key}>
                            <img src={item.poster} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    );
}

export default Movie;