import React from "react";
import Nickelback from "../../pages/AlbumPage/Nickelback";


function Body() {
    return(
        <>
            <table style={{ border: "1px solid black", textAlign: "center" }}>
            <thead>
                <tr>
                <th>img</th>
                <th>Album</th>
                <th>Released</th>
                <th>Song</th>
                <th>Reaction</th>
                </tr>
            </thead>
            <tbody>
                { renderRows }
            </tbody>
        </table>
        </>
    )
}

export default Body;