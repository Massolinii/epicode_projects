import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ songInfo }) => {
  return (
    /*Un elegantissimo (si fa per dire) optional chaining per costringere l'API a funzionare */
    <div className="col-12 col-md-6 col-lg-3 text-center" id={songInfo?.id}>
      <Link to={`/album/${songInfo?.album?.id}`}>
        <img
          className="img-fluid"
          src={songInfo?.album?.cover_medium}
          alt="1"
        />
      </Link>
      <p>
        <Link to={`/album/${songInfo?.album?.id}`}>
          Album: "
          {songInfo?.album?.title?.length < 16
            ? `${songInfo.album.title}`
            : `${songInfo.album.title.substring(0, 16)}...`}
          "<br />
        </Link>
        <Link to={`/artist/${songInfo?.artist?.id}`}>
          Artist: {songInfo?.artist?.name}
        </Link>
      </p>
    </div>
  );
};

export default AlbumCard;
