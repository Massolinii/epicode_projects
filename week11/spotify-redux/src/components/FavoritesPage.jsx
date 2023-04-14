import React from "react";
import { useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";

const FavoritesPage = () => {
  const likedTracks = useSelector((state) => state.likedTracks);

  return (
    <div>
      <h2>Favorite Songs</h2>
      <div className="row">
        {Object.entries(likedTracks)
          .filter(([, isLiked]) => isLiked)
          .map(([trackId]) => (
            <AlbumCard key={trackId} trackId={trackId} />
          ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
