export const addAlbum = (title, artist, album, year, genre, cover, tracks) => {
	return {
		type: "ADD_ALBUM",
		payload: {
			id: Math.random(),
			artist: artist,
			album: album,
			year: year,
			genre: genre,
			cover: cover,
			tracks: [...tracks]
		}
	};
};

export const editAlbum = (idx, title, artist, album, year, genre, cover, tracks) => {
	return {
		type: "EDIT_ALBUM",
		payload: {
			id: idx,
			title: title,
			artist: artist,
			album: album,
			year: year,
			genre: genre,
			cover: cover,
			tracks: [...tracks]
		}
	};
};

export const deleteAlbum = (idx) => {
	return {
		type: "DELETE_ALBUM",
		payload: {
			id: idx
		}
	};
};
