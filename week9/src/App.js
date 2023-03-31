import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import FilmCarousel from "./components/FilmCarousel";
import Footer from "./components/Footer";

class App extends Component {

  // Inizializza lo stato per la query di ricerca
  state = {
    searchQuery: "",
  };

  // Funzione per gestire l'azione di ricerca dal componente SearchBar
 handleSearch = (searchQuery) => {
  this.setState({ searchQuery: searchQuery.replace(/\s+/g, '%20') });
};

  // Endpoint per la ricerca statica
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
        <h2 className="collectionTitle">Search</h2>
        <SearchBar onSearch={this.handleSearch} />
        {this.state.searchQuery && (
          <>
            <h2 className="collectionTitle">Search Results</h2>
            <FilmCarousel myEndpoint={this.state.searchQuery} />
          </>
        )}

        {/* Impossibile trovare una query di ricerca "soddisfacente" per i titoli dinamici, i risultati erano tipo "potter" che come titolo non è il massimo */}
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

// E mettiamoli sti 10 professò <3