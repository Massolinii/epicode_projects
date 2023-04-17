const initialState = {
  currentTrack: null,
  likedTracks: {},
  searchResults: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_TRACK":
      return { ...state, currentTrack: action.payload };
    case "TOGGLE_LIKE_TRACK":
      return {
        ...state,
        likedTracks: {
          ...state.likedTracks,
          [action.payload]: !state.likedTracks[action.payload],
        },
      };
    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};

export default mainReducer;
