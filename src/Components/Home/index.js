import { useState, useEffect } from "react";
import "./Home.css";
import BlogList from "../BlogList";
import SidBar from "../SidBar";

const Home = () =>{

    const data = [
        {titile: 'Hello Word', body: 'Lorem ipsum....', author: 'Delfino', id:1},
        {titile: 'Api Rest', body: 'Lorem ipsum....', author: 'Artur Mendes', id:2},
        {titile: 'Cumputer Programmers', body: 'Lorem ipsum....', author: 'Delfino', id:3},
        {titile: 'Cumputer AI', body: 'Lorem ipsum....', author: 'José Gonsálves', id:4},
        {titile: 'PaidPaper', body: 'Lorem ipsum....', author: 'Richard Hendricks', id:5}
    ];

    const [blogs,setBlogs] = useState([]);
    const [isPending,setPending] = useState(true);

    const handleDelete = (id) => {

        const newPosts = blogs.filter(blog => blog.id !== id);

        if(newPosts.length > 0){

            setBlogs(newPosts);
        }
        else{

            setBlogs(null);
        }
    }

    useEffect(() => {

        setTimeout(() => {
            //Carregando os posts em 1 segundo
            setBlogs(data);
            setPending(false);

        },1000);
    },[])

    return (
        
        <div className="Home">
            <BlogList blogs={blogs} title="Post List" handleDelete={handleDelete} />
            <SidBar />
            {isPending && <div className="loading"><span>Loading...</span></div>}
        </div>
        
    );
}

export default Home;