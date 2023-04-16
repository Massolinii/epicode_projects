import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentTrack,
  toggleLikeTrack,
  setSearchResults,
} from "../redux/actions/actions";

const AlbumPage = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  const likedTracks = useSelector((state) => state.likedTracks);
  const dispatch = useDispatch();

  const handleTrackClick = (track) => {
    dispatch(setCurrentTrack(track));
  };

  useEffect(() => {
    async function fetchAlbum() {
      let headers = new Headers({
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
      });

      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/album/" + id,
          {
            method: "GET",
            headers,
          }
        );

        if (response.ok) {
          let album = await response.json();
          setAlbum(album);
          dispatch(setSearchResults(album.tracks.data));
        } else {
          console.error("Something went wrong:", await response.text());
        }
      } catch (exception) {
        console.error("Error:", exception);
      }
    }

    fetchAlbum();
  }, [id, dispatch]);

  if (!album) {
    return <div>Loading....</div>;
  }

  return (
    <div className="container flex">
      <div className="row AlbumPageMainRow">
        <div className="col-12 col-md-3 pt-5 text-center" id="img-container">
          <img
            src={album?.cover || "Loading..."}
            className="card-img img-fluid"
            alt="Album"
          />
          <div className="mt-2 text-center">
            <p className="album-title">{album?.title || "Loading..."}</p>
          </div>

          <Link className="noDecoration" to={`/artist/${album?.artist?.id}`}>
            <p className="artist-name">{album?.artist?.name || "Loading..."}</p>
          </Link>

          <div className="mt-4 text-center">
            <button id="btnPlay" className="btn btn-success" type="button">
              P L A Y
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col-md-10 mb-5" id="trackList">
              {album.tracks?.data.map((track) => (
                <div key={track.id} className="py-3 trackHover">
                  <span
                    href="/"
                    className="card-title trackHover px-3"
                    style={{ color: "white" }}
                    onClick={() => handleTrackClick(track)}
                  >
                    {track.title}
                  </span>
                  <small className="duration" style={{ color: "white" }}>
                    {Math.floor(parseInt(track.duration) / 60)}:
                    {parseInt(track.duration) % 60 < 10
                      ? "0" + (parseInt(track.duration) % 60)
                      : parseInt(track.duration) % 60}
                  </small>
                  <button
                    className="btn btn-danger p-0 btnLike"
                    onClick={() => dispatch(toggleLikeTrack(track.id))}
                    style={{ color: "white" }}
                  >
                    {likedTracks[track.id] ? "Unlike💔" : "Like❤️"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
