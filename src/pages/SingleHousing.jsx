import Carrousel from "../components/Carrousel";
import { useParams } from "react-router-dom";
import Error from "./Error";
import "../css/singleHousing.css";
import DropDown from "../components/DropDown";
import StarsRate from "../components/StarsRate";

const SingleHousing = (props) => {
  /*I catch the id with useParams method*/
  const houseId = useParams();
  /*and save in house const all the data of the house funded with the houseid const*/
  const house = props.housing.find((house) => house.id === houseId.productId);

  /*If no house is find display the Error page*/
  if (house === undefined) {
    return <Error />;
  }

  const pictures = house.pictures;

  const [firstName, lastName] = house.host.name.split(" "); /*here I split the full name to display the firstName and the lastName one under the other more bellow*/

  /*mapping of each equipment list to create li depending to numbs of equipments*/
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
      {/*Carroussel in house page*/}
      <Carrousel pictures={pictures} />
      {/*house détail under the carrousel*/}
      <section className="houseDetailTop">
        <div className="titleTagContainer">
          <h1>{house.title}</h1>
          <p>{house.location}</p>
          <div className="tagContainer">
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
        <div className="hostDetail">
          <div id="rateStarsContainer">
            <StarsRate rate={house.rating}/>
          </div>

          <div className="namePictContainer">
            <div className="nameContainer">
              <p>{firstName}</p>
              <p>{lastName}</p>
            </div>

            <img src={house.host.picture} alt="owner profile"></img>
          </div>
        </div>
      </section>
      <section className="houseDetailBottom">
            <DropDown classes="singleHouseDropDown dropDown" title="Description" content={house.description}/>
            <DropDown classes="singleHouseDropDown dropDown" title="Équipements" content={<EquipmentsList />} /> {/*here is used equipment list*/}
      </section>
    </>
  );
};

export default SingleHousing;
