import { useState, useEffect } from "react";
import "./realesed.css";

const RealesedMovie = ({item}) =>{

    return (
         
        <section className="realesed" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage : `url(${item.posterBack})` 
        }}>
            <div className="realesed--vertical">
                <div className="realesed--horizontal">
                   <div className="realesed--name">{item.title}</div>
                   <div className="realesed--info">
                        <div className="realesed--year">{item.realesed}</div>
                   </div>
                   <div className="realesed--discription">
                       {item.discription}
                    </div>
                    <div className="realesed--buttons">
                        <a className="realesed--button-play" href={`/assistir/${item.id}`}>▶ Assistir</a>
                        <a className="realesed--button-favorits" href={`/favoritos/${item.id}`}>🤍 Favoritos</a>
                    </div>
                    <div className="realesed--genero">
                        <b>Gêneros:</b> {item.genero}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RealesedMovie;