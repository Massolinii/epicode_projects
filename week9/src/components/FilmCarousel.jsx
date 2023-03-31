import Carousel from "react-bootstrap/Carousel";
import { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FilmCarousel.css";

class FilmCarousel extends Component {
  state = {
    filmSaga: [],
  };

  getAllReservation = async (Endpoint) => {
    try {
      let response = await fetch(
        `https://www.omdbapi.com/?apikey=f6820bf5&s=${Endpoint}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          filmSaga: data.Search,
        });
      } else {
        console.log("ERROR : Something went wrong in the API call");
      }
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    await this.getAllReservation(this.props.myEndpoint);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.myEndpoint !== this.props.myEndpoint) {
      await this.getAllReservation(this.props.myEndpoint);
    }
  }

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
            {this.state.filmSaga.map((Search, index) => {
              if (index % 6 === 0) {
                return (
                  <Carousel.Item key={index}>
                    <Row className="d-flex flex-nowrap overflow-hidden  gx-5">
                      {this.state.filmSaga.map((data) => (
                        <Col
                          xs={6}
                          sm={4}
                          md={3}
                          lg={2}
                          key={data.imdbID}
                          className="p-0 d-flex justify-content-center"
                        >
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
