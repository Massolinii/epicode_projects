import { Container, Button } from "react-bootstrap";
import TownCard from "./TownCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

function TownPage() {
  const API_KEY = "6cbf0b3cb080c11f09fe6ba72bb563b5";
  const params = useParams();
  console.log(params);
  const [town, setTown] = useState(null);

  const getTownDetails = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params.name}&appid=${API_KEY}`
      );
      if (response.ok) {
        let details = await response.json();
        setTown(details);
        console.log(details);
      } else {
        console.log("error happened with the request");
      }
    } catch (error) {
      console.log("generic error happened", error);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getTownDetails();
  }, []);

  return (
    <Container>
      <Button
        color="danger"
        onClick={() => {
          dispatch({
            type: "ADD_TO_FAV",
            payload: params.name,
          });
        }}
      >
        Add to your Favourites
      </Button>
      {town !== null && <TownCard town={town} />}
    </Container>
  );
}

export default TownPage;
