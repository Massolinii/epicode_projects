import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ songInfo }) => {
  if (!songInfo) {
    return <div>Loading...</div>;
  }

  return (
    /*Un elegantissimo (si fa per dire) optional chaining per costringere l'API a funzionare */
    <div
      className="col-6 col-md-6 col-lg-3 text-center text-decoration-none"
      id={songInfo?.id}
    >
      <Link to={`/album/${songInfo?.album?.id}`}>
        <img
          className="img-fluid"
          src={songInfo?.album?.cover_medium}
          alt="1"
        />
      </Link>
      <p>
        <Link
          className="text-decoration-none text-light"
          to={`/album/${songInfo?.album?.id}`}
        >
          <span>Album: </span>
          {songInfo?.album?.title?.length < 20
            ? `${songInfo?.album?.title}`
            : `${songInfo?.album?.title?.substring(0, 20)}...`}
        </Link>
        <br />
        <Link
          className="text-decoration-none text-light"
          to={`/artist/${songInfo?.artist?.id}`}
        >
          Artist: {songInfo?.artist?.name}
        </Link>
      </p>
    </div>
  );
};

export default AlbumCard;
