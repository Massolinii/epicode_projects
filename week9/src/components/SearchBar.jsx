import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    searchQuery: "",
  };

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { onSearch } = this.props;

    return (
      <InputGroup className="my-3 searchBar">
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