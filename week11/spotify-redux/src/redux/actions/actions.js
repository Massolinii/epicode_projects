export const setCurrentTrack = (track) => ({
  type: "SET_CURRENT_TRACK",
  payload: track,
});

export const toggleLikeTrack = (trackId) => ({
  type: "TOGGLE_LIKE_TRACK",
  payload: trackId,
});

export const setSearchResults = (results) => ({
  type: "SET_SEARCH_RESULTS",
  payload: results,
});
