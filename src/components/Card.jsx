import { Link } from "react-router-dom";

const Card = (props) => {
    return (
      <Link to={`/products/${props.id}`} className="card">
        <img
          src={props.image}
          alt={`${props.title}, ${props.attribute}`}
          className="cardImg"
        ></img>
        <div className="cardImgShadow"></div>
        <h3>{props.title}</h3>
      </Link>
    );
  };

  export default Card;