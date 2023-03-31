import Carousel from "react-bootstrap/Carousel";
import { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FilmCarousel.css";

class FilmCarousel extends Component {
  // inizializza l'array come vuoto
  state = {
    filmSaga: [],
  };

  // Funzione di fetch dall'API basato sull'endpoint
  getAllReservation = async (Endpoint) => {
    try {
      let response = await fetch(
        `https://www.omdbapi.com/?apikey=f6820bf5&s=${Endpoint}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        // Checka l'esistenza di un search prima di iniziare la ricerca
        if (data.Search) {
          this.setState({
            filmSaga: data.Search,
          });
        } else {
          this.setState({
            filmSaga: [],
          });
        }
      } else {
        console.log("ERROR : Something went wrong in the API call");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Chiamato una volta che il component è montato
  async componentDidMount() {
    await this.getAllReservation(this.props.myEndpoint);
  }

  // Chiamato all'aggiornamento del component
  async componentDidUpdate(prevProps) {
    if (prevProps.myEndpoint !== this.props.myEndpoint) {
      await this.getAllReservation(this.props.myEndpoint);
    }
  }

  // UI
  render() {
    return (
      <div className="carousel-container">
        <Container fluid>
          <Carousel
            nextIcon={
              <span aria-hidden="true" className="carousel-control-next-icon" />
            }
            prevIcon={
              <span aria-hidden="true" className="carousel-control-prev-icon" />
            }
            indicators={false}
          >
            {/* Mappa attraverso filmSaga e crea i Carousel Items*/}
            {this.state.filmSaga.map((Search, index) => {
              if (index % 6 === 0) {
                return (
                  <Carousel.Item key={index}>
                    <Row className="d-flex flex-nowrap overflow-hidden  gx-5">
                      {/* Mappa attraverso filmSaga NUOVAMENTE e crea i movie Items*/}
                      {this.state.filmSaga.map((data) => (
                        <Col
                          xs={6}
                          sm={4}
                          md={3}
                          lg={2}
                          key={data.imdbID}
                          className="p-0 d-flex justify-content-center"
                        >
                          {/* Mostra i poster dei film*/}
                          <img
                            className="d-block w-100 m-2"
                            src={data.Poster}
                            alt={`${data.Title} poster`}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Carousel.Item>
                );
              } else {
                return null;
              }
            })}
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default FilmCarousel;
