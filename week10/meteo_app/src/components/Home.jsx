import { Container } from "react-bootstrap";
import MainHome from "./MainHome";
import TownsCarousel from "./TownsCarousel";
import Searchbar from "./Searchbar";
import TownCard from "./TownCard";

const MyHome = () => {
  return (
    <Container fluid>
      <Searchbar />
      <div>
        <MainHome />
        <TownsCarousel />
      </div>
      <div>
        <TownCard />
        <TownCard />
        <TownCard />
        <TownCard />
        <TownCard />
        <TownCard />
      </div>
    </Container>
  );
};

export default MyHome;
