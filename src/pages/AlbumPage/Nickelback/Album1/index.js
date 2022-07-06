import React from 'react';
import { useParams } from 'react-router-dom';

export default function Album1() {
    let { albumId } = useParams();

    let album1List = [
        { img: "https://m.media-amazon.com/images/I/71pDyrfi62L._AC_SL1425_.jpg", Album: 'All The right Reasons', Released: 2005, song: 'Follow You Home', Reaction: "" },
        {song: 'Fight For All The Wrong Reasons', Reaction: "" },
        {song: 'Photograph', Reaction: "" },
        {song: 'Animals', Reaction: "" },
        {song: 'Savin Me', Reaction: "" },
        {song: 'Far Away', Reaction: "" },
        {song: 'Next Contestant', Reaction: "" },
        {song: 'Side Of A Bullet', Reaction: "" },
        {song: 'If Everyone Cared', Reaction: "" },
        {song: `Someone That You're With`, Reaction: "" },
        {song: `Rockstar`, Reaction: "" },
    ]
}
