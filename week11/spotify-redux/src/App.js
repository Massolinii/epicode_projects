import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Container, Col } from "react-bootstrap";
import LeftSidebar from "./components/LeftSidebar";
import TopNavbar from "./components/TopNavbar";
import BottomPlayer from "./components/BottomPlayer";

import Home from "./components/Home";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import FavoritesPage from "./components/FavoritesPage";

function App() {
  return (
    <BrowserRouter>
      <Container className="mainContainer d-flex">
        <div className="sideCont">
          <LeftSidebar />
        </div>

        <div className="myElements">
          <TopNavbar />
          <Col className="d-flex">
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/artist/:id" element={<ArtistPage />}></Route>
              <Route path="/album/:id" element={<AlbumPage />}></Route>
            </Routes>
          </Col>
          <BottomPlayer />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
