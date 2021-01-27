import { useState, useEffect } from "react";
import "./Home.css";
import BlogList from "../BlogList";

const Home = () =>{

    const data = [
        {titile: 'Hello Word', body: 'Lorem ipsum....', author: 'Delfino', id:1},
        {titile: 'Api Rest', body: 'Lorem ipsum....', author: 'Artur Mendes', id:2},
        {titile: 'Cumputer Programmers', body: 'Lorem ipsum....', author: 'Delfino', id:3},
        {titile: 'Cumputer AI', body: 'Lorem ipsum....', author: 'José Gonsálves', id:4},
        {titile: 'PaidPaper', body: 'Lorem ipsum....', author: 'Richard Hendricks', id:5}
    ];

    const [blogs,setBlogs] = useState(data);

    const handleDelete = (id) => {

        const newPosts = blogs.filter(blog => blog.id !== id);

        setBlogs(newPosts);
    }

    useEffect(() => {

        console.log("Application running...");

    },[blogs])

    return (

        <div className="Home">
            <BlogList blogs={blogs} title="Post List" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;