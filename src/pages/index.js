export {default as Album1} from './Artistspage/Album1';
export {default as Album2} from './Artistspage/Album2';
export {default as Album3} from './Artistspage/Album3';
export {default as Album4} from './Artistspage/Album4';

import Nickelback from '../ArtistPage/Nickelback';
import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const ArtistsPage = () => {
	let navigate = useNavigate();

	function navigatePage(artistId) {
		let { artistId } = useParams();
		navigate(`/${artistId}`)
	}

	return <>
	<h1>Welcome to our Artists Page!</h1>
	<br />
	<Nickelback />

	</>
}

export default AlbumsPage;