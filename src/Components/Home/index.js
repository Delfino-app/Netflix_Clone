import { useState, useEffect } from "react";
import "./Home.css";
import db from "../../data/index";
import Movie from "../Movie";
import RealesedMovie from "../RealesedMovie";
import NavBar from "../NavBar";
const Home = () =>{

    const [list,setList] = useState([]);
    const [realesedData,setRealesedData] = useState(null);
    const [navBlack,setBlack] = useState(false);

    useEffect(() => {

        const getList = async () => {

            let data = await db.getHome();

           setList(data);

           //Pegando o realesedData
           let realesed = data.filter(i => i.slug === 'Drama');
           let random = Math.floor(Math.random() * (realesed[0].itens.length -1));
           let movie = realesed[0].itens[random];

           setRealesedData(movie);
            
        };

        getList();

    },[])

    useEffect(() => {

        const scrollListener = () => {

            if(window.scrollY > 10){

                setBlack(true);
            }
            else{

                setBlack(false);
            }

        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            
            window.removeEventListener('scroll',scrollListener);
        }

    }, [])

    return (
        
        <div className="page">
            <NavBar black={navBlack} />
            {realesedData && <RealesedMovie item={realesedData} />}
            <section className="lists">
                {list.map((item,key) => (
                   <Movie key={key} title={item.title} items={item.itens} />
                ))}
            </section>
        </div>
        
    ); 
}

export default Home;