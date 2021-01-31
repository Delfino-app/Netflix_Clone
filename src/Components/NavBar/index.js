import "./nav.css";
import api from "../../data/config";

const NavBar = ({black}) =>{

    return (
         
       <header className={black ? 'black' : ''}>
            <div className="header--logo">
               <a href="/">
                   <img src={`${api.baseUrl}/assets/netflix_logo.svg`} />
               </a>
            </div>
            <div className="header--user">
               <a href="/user">
                   <img src="" />
               </a>
            </div>
       </header>
    );
}

export default NavBar;