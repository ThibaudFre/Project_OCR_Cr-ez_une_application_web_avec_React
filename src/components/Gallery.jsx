import "../css/Card.css";
import Card from "../components/Card"

const Gallery = (props) => {

  return (
    <main id="cardContainer">
      <div id="cardCenterContainer">
        {props.housing.map((home) => {
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
