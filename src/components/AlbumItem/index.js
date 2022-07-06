import React, { useContext } from "react";
import { AlbumContext } from "../ArtistContext";
import ArtistList from "../ArtistList";

function Album() {
	const [title, setTitle] = useContext(AlbumContext)
	const [released, setReleased] = useContext(AlbumContext);
	const [img, setImg] = useContext(AlbumContext);
	const [track, setTrack] = useContext(AlbumContext);
	return(
		<>
			<h4>NickelBack</h4>
			<ArtistList />
		</>
	);
};

export default Album;
