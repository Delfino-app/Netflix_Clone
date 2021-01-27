import { useState } from "react";
import "./Home.css";
import BlogList from "../BlogList";

const Home = () =>{

    const data = [
        {titile: 'Hello Word', body: 'Lorem ipsum....', author: 'Delfino Torres', id:1},
        {titile: 'Api Rest', body: 'Lorem ipsum....', author: 'Artur Mendes', id:2},
        {titile: 'Cumputer Programmers', body: 'Lorem ipsum....', author: 'Delfino Torres', id:3},
        {titile: 'Cumputer AI', body: 'Lorem ipsum....', author: 'José Gonsálves', id:4}
    ];

    const [blogs,setBlogs] = useState(data);

    return (

        <div className="Home">
            <BlogList blogs={blogs} title="My Post List" />
        </div>
    );
}

export default Home;