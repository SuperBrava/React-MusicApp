import React from "react";
import './index.css';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <>
           <nav>
               <Link to="/">Home</Link> 
               <Link to="/artists/:albumId">Albums</Link>
               <Link to="/artists">Artists</Link>
           </nav> 
        </>
    )
}

export default Header;