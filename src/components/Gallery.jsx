import "../css/Card.css";
import Card from "../components/Card"

/*
  Gallery is a component wich display multiples components card depending of homes quantity
  and sharing with his props all the houses data to display them.
*/
const Gallery = (props) => {
  return (
    <main className="cardContainer">
      <div className="cardCenterContainer">
        {props.housing.map((home) => {
          return (
            <Card id={home.id} title={home.title} image={home.cover} attribute={home.location} key={home.id} />
          );
        })}
      </div>
    </main>
  );
};

export default Gallery;
