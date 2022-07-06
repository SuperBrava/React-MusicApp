import React, { useContext } from "react";
import {AlbumContext} from '../../components/ArtistContext'
import Album from "../../components/AlbumItem";

function Body() {
    return(
        <>
            <h1>Nickleback Fan Club</h1>
            <Album />
        </>
    )
}

export default Body;