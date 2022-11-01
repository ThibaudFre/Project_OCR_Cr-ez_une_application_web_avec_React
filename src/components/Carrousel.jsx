import "../css/Carrousel.css";
import Arrow from "./Arrow";
import { useState } from "react";

const Carrousel = (props) => {
  const pictures = props.pictures;
  const [numPicture, setNumPicture] = useState(0);
  const picture = pictures[numPicture];


  const slide = (orientation = "right") => {
    orientation === "right"
      ? numPicture + 1 > pictures.length - 1
        ? setNumPicture(0)
        : setNumPicture(numPicture + 1) //right
      : numPicture - 1 < 0
      ? setNumPicture(pictures.length - 1)
      : setNumPicture(numPicture - 1); //left
  };

  const MoreThanOnePic = (props) => {
    if(pictures.length > 1) {
      return <Arrow ident={props.ident} classes="carrouselArrow"/>
    }
  }

  return (
    <section id="carrousel" style={{ backgroundImage: `url(${picture})` }}>
      <div id="arrowContainer">
        <div onClick={() => slide("left")} class="carrouselArrowContainer">
          <MoreThanOnePic ident="arrowLeft"/>
        </div>
        <div onClick={() => slide()} class="carrouselArrowContainer">
          <MoreThanOnePic />
        </div>
      </div>
      <div id="carrouselNumb">{numPicture + 1}/{pictures.length}</div>
    </section>
  );
};

export default Carrousel;
