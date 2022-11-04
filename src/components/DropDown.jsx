import "../css/DropDown.css";
import Arrow from "./Arrow";
import { useState } from "react";

/* DropDown is a collapse element displayed in the about page and the singleHounsing page
  
  Here (line 17) we use the react useState method seted with false by default.
  We use it to know if the collape DropDown component is open or not.

  When the user click on the title container of the DropDown collapse (l25:47) we set isOpen by his contrary. ex: isOpen = true => false (l20)

    - If isOpen true : turn the arrow from the top to the bottom and display the DropDown content (adding classes).
    - If isOpen false: the contrary (removing classes).
*/
const DropDown = (props) => {
  const [isOpen, setOpen] = useState(false);

  const displayContent = () => {
    setOpen(!isOpen);
  };

  return (
    <div className= {props.classes} >
      <div className="titleDropDownContainer" onClick={displayContent}>
        {props.title}
        <Arrow classes={`dropDownArrow ${isOpen ? "arrowDown" : ""}`} />
      </div>
      <div className={`contentDropDownContainer ${isOpen ? "contentAppear" : ""}`}>{props.content}</div>
    </div>
  );
};

export default DropDown;
