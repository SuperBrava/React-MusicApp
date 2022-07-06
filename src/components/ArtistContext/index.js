import React, { useState, createContext } from 'react';

let albumData = [
        {
            id: 1,
            title: 'All The right Reasons',
            img: "https://m.media-amazon.com/images/I/71pDyrfi62L._AC_SL1425_.jpg",
            Tracks: {
                Track1: 'Fight For All The Wrong Reasons',
                Track2: 'Photograph',
                Track3: 'Animals',
                Track4: 'Savin Me',
                Track5: 'Far Away',
                Track6: 'Next Contestant',
                Track7: 'Side Of A Bullet',
                Track8: 'If Everyone Cared',
                Track9: `Someone That You're With`,
                Track10: `Rockstar`,
			}
        },
        {
            id: 2,
            title: 'Curb',
            img: "https://upload.wikimedia.org/wikipedia/en/e/ec/Nickelback-Curb1996.jpg",
            Tracks: {
                Track1: 'Little Friend',
                Track2: 'Pusher',
                Track3: 'Detangler',
                Track4: 'Curb',
                Track5: 'Where?',
                Track6: 'Falls Back On',
                Track7: 'Sea Groove',
                Track8: 'Fly',
                Track9: 'Just Four',
                Track10: 'Left',
                Track11: 'Window Shopper',
                Track12: `I Don't Have`
            }
            
        },
        {
            id: 3,
            title: 'The State',
            img: "https://upload.wikimedia.org/wikipedia/en/6/65/The_State_%28Original_Cover%29.jpg",
            Tracks: {
                Track1: 'Breathe',
                Track2: 'Pusher',
                Track3: 'Detangler',
                Track4: 'Curb',
                Track5: 'Where?',
                Track6: 'Falls Back On',
                Track7: 'Sea Groove',
                Track8: 'Fly',
                Track9: 'Just Four',
                Track10: 'Left',
                Track11: 'Window Shopper',
                Track12: `I Don't Have`
            }
            
        },
];

//EXPORTER OF ALBUM DATA
export const AlbumContext = createContext();

export const AlbumProvider = (props) => {
    const [albums, setAlbums] = useState(albumData)

    return(
        <AlbumContext.Provider value={[albums, setAlbums]}>
            {props.children}
        </AlbumContext.Provider>
    )
    
}