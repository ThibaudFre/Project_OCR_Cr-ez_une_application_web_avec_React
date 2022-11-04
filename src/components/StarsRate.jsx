import Star from "./Star";

const StarsRate = (props) => {
    const rate = parseInt(props.rate);
    const starColors = [];
      /*
    - Under I want to push the red color depending on rate const 
      ex: if rate is 3 I push 3 times the color red in my array.

    - Next I save the result of the subtraction of 5 stars(the max of rate)
      minus the rate in the restStars const.

    - I push the restStars times of grey color in the array.

    - Result: my array contain [rate times the red color, rest times the grey color]
  */
    for (let i = 0; i < rate; i++) {
        starColors.push("#FF6060");
    }
    
    const restStars = 5 - rate;
    
    for (let i = 0; i < restStars; i++) {
        starColors.push("#E3E3E3");
    }

    /*
        I map my starColors array for each color I display a star
        and inside the component use the color with the fill attribute 
        depending to SVG type.
    */
    return (
        starColors.map((color, index) => {
            return (
                <Star color={color} key={"star" + index} />
            )
         
        })
    )
}


export default StarsRate