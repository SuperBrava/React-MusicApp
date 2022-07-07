const artistReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ARTIST":
			return [...state, action.payload];
		case "REMOVE_ARTIST":
			return state.filter(artist => artist.id !== action.payload);
		case "EDIT_ARTIST":
			return state.map(artist => {
				if (artist.id === action.payload.id) {
					return action.payload;
				} else {
					return artist;
				}
			});
		default:
			return state;
	};
};

export default artistReducer;
