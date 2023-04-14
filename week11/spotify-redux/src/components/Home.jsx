import React, { useEffect, useState } from "react";
import { fetchArtists } from "../api";
import AlbumCard from "./AlbumCard";

const Home = () => {
  const [songs, setSongs] = useState({
    rockSongs: [],
    popSongs: [],
    hipHopSongs: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchArtists(4); // Replace 4 with the desired number of random artists
      setSongs(result);
    };
    fetchData();
  }, []);

  return (
    <div>
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
