import React from "react";

const ArtistsPage = () => {


	return <>
	<h1>Welcome to our Artists Page!</h1>
	<br />
	<div>
		<h2>Nickelback</h2>
		<p>
			Nickelback is a Canadian rock band formed in 1995 in Hanna, Alberta. It is composed of guitarist and lead vocalist Chad Kroeger, guitarist, keyboardist and backing vocalist Ryan Peake, bassist Mike Kroeger, and drummer Daniel Adair. It went through several drummer changes between 1995 and 2005, achieving its current lineup when Adair replaced Ryan Vikedal.
		</p>
		<button onClick={navigatePage(1)}>View our Albums!</button><Outlet />
	</div>

	</>
}

export default AlbumsPage;