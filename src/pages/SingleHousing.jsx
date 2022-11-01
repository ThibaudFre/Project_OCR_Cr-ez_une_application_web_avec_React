import Carrousel from "../components/Carrousel";
import { useParams } from "react-router-dom";
import Error from "./Error";
import "../css/singleHousing.css";
import Star from "../components/Star";
import DropDown from "../components/DropDown";

const SingleHousing = (props) => {
  const houseId = useParams();
  const house = props.housing.find((house) => house.id === houseId.productId);

  if (house === undefined) {
    return <Error />;
  }

  const pictures = house.pictures;

  const [firstName, lastName] = house.host.name.split(" ");

  const rate = parseInt(house.rating);
  const starColors = [];

  for (let i = 0; i < rate; i++) {
    starColors.push("#FF6060");
  }

  const restStars = 5 - rate;

  for (let i = 0; i < restStars; i++) {
    starColors.push("#E3E3E3");
  }

  const EquipmentsList = () => {
    return(
      <ul>
        {house.equipments.map(equipment => {
          return (
            <li key={equipment}>{equipment}</li>
          )
        })}
      </ul>
    )   
  }

  return (
    <>
      <Carrousel pictures={pictures} />
      <section id="houseDetailTop">
        <div id="titleTagContainer">
          <h1>{house.title}</h1>
          <p>{house.location}</p>
          <div id="tagContainer">
            {house.tags.map((tag) => {
              return (
                <div className="houseTag" key={tag}>
                  {" "}
                  {tag}{" "}
                </div>
              );
            })}
          </div>
        </div>
        <div id="hostDetail">
          <div id="rateStarsContainer">
            {starColors.map((color, index) => {
              return <Star color={color} key={"star" + index} />;
            })}
          </div>

          <div id="namePictContainer">
            <div id="nameContainer">
              <p>{firstName}</p>
              <p>{lastName}</p>
            </div>

            <img src={house.host.picture} alt="owner profile"></img>
          </div>
        </div>
      </section>
      <section id="houseDetailBottom">
            <DropDown classes="singleHouseDropDown dropDown" title="Description" content={house.description}/>
            <DropDown classes="singleHouseDropDown dropDown" title="Équipements" content={<EquipmentsList />} />
      </section>
    </>
  );
};

export default SingleHousing;
