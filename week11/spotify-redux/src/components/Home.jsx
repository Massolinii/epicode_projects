import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import { fetchArtists, search } from "./api";

import AlbumCard from "./AlbumCard";
import LeftSidebar from "./LeftSidebar";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState({
    rockSongs: [],
    popSongs: [],
    hipHopSongs: [],
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchQuery.lenght > 2) {
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
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  return (
    <div>
      {loading ? (
        <div className="mt-5 text-center">
          <p className="text-warning">Loading...</p>
          <Spinner animation="border" role="status" variant="warning"></Spinner>
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

          <h2 id="rock">Rock Songs</h2>
          <div className="row">
            {songs.rockSongs.map((song, index) => (
              <AlbumCard key={index} songInfo={song} />
            ))}
          </div>

          <h2 id="pop">Pop Songs</h2>
          <div className="row">
            {songs.popSongs.map((song, index) => (
              <AlbumCard key={index} songInfo={song} />
            ))}
          </div>

          <h2 id="hiphop">Hip-Hop Songs</h2>
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
