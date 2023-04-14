import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Artist from "./components/Artist";
import Album from "./components/Album";
import { Container } from "react-bootstrap";
import LeftSidebar from "./components/LeftSidebar";
import TopNavbar from "./components/TopNavbar";
import BottomPlayer from "./components/BottomPlayer";

function App() {
  return (
    <BrowserRouter>
      <Container className="mainContainer d-flex" fluid>
        <Container className="sideCont" fluid>
          <LeftSidebar />
        </Container>
        <Container className="myElements">
          <TopNavbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/artist/:id" element={<Artist />}></Route>
            <Route path="/album/:id" element={<Album />}></Route>
          </Routes>
          <BottomPlayer />
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
