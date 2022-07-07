import React, { useContext } from "react";
import Album from "../AlbumItem";
import { AlbumContext } from '../ArtistContext';

function ArtistList() {
	const [albums, setAlbums] = useContext(AlbumContext);
	// console.log(albums);
	// console.log(albums[0].Tracks)
		
	return(
		<div className="nickelback-albums">
			{/* {albums.map(album => (
				<Album />
			))}; */}
			<div className="album1">
				<img src={albums[0].img} alt="" width="350px"/>
				<h1>{albums[0].title}</h1>

				<ul>
				{albums[0].Tracks.map(track => {
						console.log(track);
						return <li>{track}</li>
				})}
				</ul>
			</div>
			<div className="album2">
				<img src={albums[1].img} alt="" width="350px"/>
				<h1>{albums[1].title}</h1>

				<ul>
				{albums[1].Tracks.map(track => {
						console.log(track);
						return <li>{track}</li>
				})}
				</ul>
			</div>
			<div className="album3">
				<img src={albums[2].img} alt="" width="350px"/>
				<h1>{albums[2].title}</h1>

				<ul>
				{albums[2].Tracks.map(track => {
						console.log(track);
						return <li>{track}</li>
				})}
				</ul>
			</div>
			<div className="album4">
				<img src={albums[3].img} alt="" width="350px"/>
				<h1>{albums[3].title}</h1>

				<ul>
				{albums[3].Tracks.map(track => {
						console.log(track);
						return <li>{track}</li>
				})}
				</ul>
			</div>
		</div>
	);
};

export default ArtistList;
