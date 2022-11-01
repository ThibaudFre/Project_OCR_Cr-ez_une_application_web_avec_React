import "../css/DropDown.css";
import Arrow from "./Arrow";

const DropDown = (props) => {
  const displayContent = (e) => {
    if(props.content) {
      e.target.classList.toggle('ArrowDown')
      const contentContainer = e.target.parentNode.parentNode.lastElementChild;
      contentContainer.classList.toggle("contentAppear")
    }
   
  }

  return (
    <div className={props.classes}>
      <div className="titleDropDownContainer" >
        {props.title}
        <Arrow classes="dropDownArrow" click={(e) => displayContent(e)}/>
      </div>
      <div className="contentDropDownContainer">{props.content}</div>
    </div>
  );
};

export default DropDown;
