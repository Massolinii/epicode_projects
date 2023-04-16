import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, ProgressBar, Image } from "react-bootstrap";

import shuffle from "../imgs/playerbuttons/Shuffle.png";
import previous from "../imgs/playerbuttons/Previous.png";
import play from "../imgs/playerbuttons/Play.png";
import next from "../imgs/playerbuttons/Next.png";
import repeat from "../imgs/playerbuttons/Repeat.png";

function BottomPlayer() {
  const currentTrack = useSelector((state) => state.currentTrack);
  return (
    <Container fluid className="bg-container">
      <Row className="justify-content-center">
        <Col
          xs={12}
          sm={10}
          md={6}
          className="playerControls mt-1 d-flex justify-content-center align-items-center"
        >
          <div>
            <a href="/" className="mx-1">
              <Image src={shuffle} alt="shuffle" />
            </a>
            <a href="/" className="mx-1">
              <Image src={previous} alt="previous" />
            </a>
            <a href="/#" className="mx-1">
              <Image src={play} alt="play" />
            </a>
            <a href="/" className="mx-1">
              <Image src={next} alt="next" />
            </a>
            <a href="/" className="mx-1">
              <Image src={repeat} alt="repeat" />
            </a>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center playBar py-3">
        <Col xs={10} md={9} lg={6}>
          <ProgressBar now={0} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p className="text-white">
            Currently listening : {currentTrack?.title} -{" "}
            {currentTrack?.artist?.name}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default BottomPlayer;
