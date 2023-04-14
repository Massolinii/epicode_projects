import React, { useEffect, useState } from "react";
import { fetchArtists, search } from "../api";
import AlbumCard from "./AlbumCard";
import LeftSidebar from "./LeftSidebar";
import { setCurrentTrack } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

import { Spinner } from "react-bootstrap";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState({
    rockSongs: [],
    popSongs: [],
    hipHopSongs: [],
  });

  const dispatch = useDispatch();
  const handleTrackClick = (track) => {
    dispatch(setCurrentTrack(track));
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchQuery.length > 2) {
      const results = await search(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchArtists(4);
        setSongs(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <div>
            <LeftSidebar
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
            />
          </div>

          {searchResults.length > 0 && (
            <>
              <h2>Search Results</h2>
              <div className="row">
                {searchResults.slice(0, 4).map((song, index) => (
                  <AlbumCard key={index} songInfo={song} />
                ))}
              </div>
              <div className="row">
                {searchResults.slice(4, 8).map((song, index) => (
                  <AlbumCard key={index} songInfo={song} />
                ))}
              </div>
            </>
          )}

          <h2>Rock Songs</h2>
          <div className="row">
            {songs.rockSongs.map((song, index) => (
              <AlbumCard key={index} songInfo={song} />
            ))}
          </div>

          <h2>Pop Songs</h2>
          <div className="row">
            {songs.popSongs.map((song, index) => (
              <AlbumCard key={index} songInfo={song} />
            ))}
          </div>

          <h2>Hip-Hop Songs</h2>
          <div className="row">
            {songs.hipHopSongs.map((song, index) => (
              <AlbumCard key={index} songInfo={song} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
