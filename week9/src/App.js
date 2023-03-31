import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import FilmCarousel from "./components/FilmCarousel";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    searchQuery: "",
  };

  handleSearch = (searchQuery) => {
    this.setState({ searchQuery });
  };

  render() {
    const potter = "harry%20potter";
    const marvel = "marvel";
    const starWars = "star%20wars";
    const bond = "spy";
    const spongebob = "spongebob";

    return (
      <div className="App">
        <NavBar />
        <Jumbotron />
        <SearchBar onSearch={this.handleSearch} />
        {this.state.searchQuery && (
          <>
            <h2 className="collectionTitle">Search Results</h2>
            <FilmCarousel myEndpoint={this.state.searchQuery} />
          </>
        )}
        <h2 className="collectionTitle">The Boy Who Lived - Harry Potter's Saga</h2>
        <FilmCarousel myEndpoint={potter} />
        <h2 className="collectionTitle">Star Wars - The Original Sixology :</h2>
        <FilmCarousel myEndpoint={starWars} />
        <h2 className="collectionTitle">Action - Spy Movies</h2>
        <FilmCarousel myEndpoint={bond} />
        <h2 className="collectionTitle">Latest from Marvel Cinematic Universe :</h2>
        <FilmCarousel myEndpoint={marvel} />
        <h2 className="collectionTitle">SpongeBob Cinematic Universe:</h2>
        <FilmCarousel myEndpoint={spongebob} />
        <Footer />
      </div>
    );
  }
}

export default App;