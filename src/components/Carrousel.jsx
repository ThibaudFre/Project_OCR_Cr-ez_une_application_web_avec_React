import "../css/Carrousel.css";
import Arrow from "./Arrow";
import { useState } from "react";

/*
  Carrousel is the component displaying the house images in the "products/house:id" path.

  - The user can change the image with a left or a right arrow only when the house have 
  more than one picture. In the contrary arrows are not displayed (MoreThanOnePic Line 38)

  - A fraction is displayed down of the carrousel(except for mobile screens) representing the number
  of the image on the total of image. ex: image 4 on total 6 images => 4/6 (line 54)

  - When the user click on the right arrow and was at the last picture the carrousel display the first picture.
    When the user click on the left arrow and was at the first picture the carrousel display the last picture (slide line 24, 28)
*/

const Carrousel = (props) => {
  const pictures = props.pictures;
  const [numPicture, setNumPicture] = useState(0);
  const picture = pictures[numPicture];

  /* 
  const slide:
    if index of the actual image plus one is superior of the length of the pictures array minus one => come back to the first image...
    if index of the actual image minus one is inferior of the length of the pictures array minus one => move to the last image...
  */
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
    <section className="carrousel" style={{ backgroundImage: `url(${picture})` }}>
      <div className="arrowContainer">
        <div onClick={() => slide("left")} className="carrouselArrowContainer">
          <MoreThanOnePic ident="arrowLeft"/>
        </div>
        <div onClick={() => slide()} className="carrouselArrowContainer">
          <MoreThanOnePic />
        </div>
      </div>
      <div className="carrouselNumb">{numPicture + 1}/{pictures.length}</div>
    </section>
  );
};

export default Carrousel;
