import React from 'react';
import Nickelback from '../../AlbumPage/Nickelback';
import { Outlet, useNavigate, useParams } from "react-router-dom";

function NickelbackPage() {
	let navigate = useNavigate();

	function navigatePage(artistId) {
		let { artistId } = useParams();
		navigate(`/${artistId}`)
	}

    return (
        <>
            <Nickelback />
        </>
    )
}