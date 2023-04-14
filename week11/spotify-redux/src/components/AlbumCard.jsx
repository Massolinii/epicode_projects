import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ songInfo }) => {
  return (
    <div className="col text-center" id={songInfo.id}>
      <Link to={`/album_page?id=${songInfo.album.id}`}>
        <img className="img-fluid" src={songInfo.album.cover_medium} alt="1" />
      </Link>
      <p>
        <Link to={`/album_page?id=${songInfo.album.id}`}>
          Album: "
          {songInfo.album.title.length < 16
            ? `${songInfo.album.title}`
            : `${songInfo.album.title.substring(0, 16)}...`}
          "<br />
        </Link>
        <Link to={`/artist_page?id=${songInfo.artist.id}`}>
          Artist: {songInfo.artist.name}
        </Link>
      </p>
    </div>
  );
};

export default AlbumCard;
