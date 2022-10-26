import { Link } from "react-router-dom";
import "../css/Card.css";
import homes from "../logements.json";
import Card from "../components/Card"

const Gallery = () => {
  return (
    <main id="cardContainer">
      <div id="cardCenterContainer">
        {homes.map((home) => {
          return (
            <Card
              id={home.id}
              title={home.title}
              image={home.cover}
              attribute={home.location}
              key={home.id}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Gallery;
