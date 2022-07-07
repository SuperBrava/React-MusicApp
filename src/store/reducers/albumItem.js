const albumReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ALBUM":
			return [...state, action.payload];
		case "REMOVE_ALBUM":
			return state.filter(album => album.id !== action.payload);
		case "EDIT_ALBUM":
			return state.map(album => {
				if (album.id === action.payload.id) {
					return action.payload;
				} else {
					return album;
				}
			});
		default:
			return state;
	};
};

export default albumReducer;
