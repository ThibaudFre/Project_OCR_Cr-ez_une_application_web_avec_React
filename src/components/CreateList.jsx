/*mapping of each element list to create li depending to numbs of elements*/
  const CreateList = (props) => {
    return(
      <ul>
        {props.toList.map(equipment => {
          return (
            <li key={equipment}>{equipment}</li>
          )
        })}
      </ul>
    )   
  }

  export default CreateList;

