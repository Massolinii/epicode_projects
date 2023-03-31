import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./SearchBar.css";

class SearchBar extends Component {
  // Inizializza il componente search con una query vuota
  state = {
    searchQuery: "",
  };

  // funzione Handler per aggiornare la query di ricerca nello state
  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { onSearch } = this.props;

     // Ritorna il JSX stampato
    return (
      <InputGroup className="my-3 mb-5 searchBar">
        <FormControl
          placeholder="Search movies..."
          value={this.state.searchQuery}
          onChange={this.handleInputChange}
        />
        <Button className="searchButton" onClick={() => onSearch(this.state.searchQuery)}>Search</Button>
      </InputGroup>
    );
  }
}

export default SearchBar;