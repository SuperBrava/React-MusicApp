import React, { useState, createContext } from 'react';

let albumData = [
        {
            id: 1,
            title: 'All The right Reasons',
            released: 2005,
            img: "https://m.media-amazon.com/images/I/71pDyrfi62L._AC_SL1425_.jpg",
            Tracks: [
                'Fight For All The Wrong Reasons',
                'Photograph',
                'Animals',
                'Savin Me',
                'Far Away',
                'Next Contestant',
                'Side Of A Bullet',
                'If Everyone Cared',
                `Someone That You're With`,
                `Rockstar`,
            ]
        },
        {
            id: 2,
            title: 'Curb',
            released: 1996,
            img: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Nickelback-Curb1996.jpg',
            Tracks: [
                'Little Friend',
                'Pusher',
                'Detangler',
                'Curb',
                'Where?',
               'Falls Back On',
                'Sea Groove',
                'Fly',
                'Just Four',
                'Left',
                'Window Shopper',
                `I Don't Have`,
            ]
            
        },
        {
            id: 3,
            title: 'The State',
            released: 1998,
            img: "https://upload.wikimedia.org/wikipedia/en/6/65/The_State_%28Original_Cover%29.jpg",
            Tracks: [
                'Breathe',
                'Cowboy Ha',
                'Leader of Men',
                'Old Enough',
                'Worthy to Say',
                'Diggin This',
                'Deep',
                'One Last Run',
                'Not Leavin Yea',
                'Hold Out Your Hand',
                'Leader of Men (Acoustic)',
                `Little Friend (Japanese Bonus Track)`
            ]
            
        },
        {
            id: 4,
            title: 'Dark Horse',
            Released: 2008,
            img: "https://www.besteveralbums.com/albumart/album_large_7183_4e4f6ba31ab7b.jpg",
            Tracks: [
                'Something in Your Mouth',
                `Burn It to the Ground`,
                `Gotta Be Somebody`,
                `I'd Come for You`,
                `Next Go Round`,
                `Just to Get High`,
                `Never Gonna Be Alone`,
                `Shakin' Hand`,
                `S.E.X.`,
                `If Today Was Your Last Day`,
                `This Afternoon`
            ]
            
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

