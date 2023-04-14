import React, { useEffect, useState } from "react";
import { fetchArtists, search } from "../api";
import AlbumCard from "./AlbumCard";
import LeftSidebar from "./LeftSidebar";

const Home = () => {
  const [songs, setSongs] = useState({
    rockSongs: [],
    popSongs: [],
    hipHopSongs: [],
  });

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
      const result = await fetchArtists(4); // Replace 4 with the desired number of random artists
      setSongs(result);
    };
    fetchData();
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default Home;
