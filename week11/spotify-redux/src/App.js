import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import { Container, Row, Col } from "react-bootstrap";
import LeftSidebar from "./components/LeftSidebar";
import TopNavbar from "./components/TopNavbar";
import BottomPlayer from "./components/BottomPlayer";
import FavoritesPage from "./components/FavoritesPage";

function App() {
  return (
    <BrowserRouter>
      <Container className="mainContainer d-flex" fluid>
        <Row className="sideCont">
          <Col>
            <LeftSidebar />
          </Col>
        </Row>
        <div className="myElements">
          <TopNavbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/artist/:id" element={<ArtistPage />}></Route>
            <Route path="/album/:id" element={<AlbumPage />}></Route>
          </Routes>
          <BottomPlayer />
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
