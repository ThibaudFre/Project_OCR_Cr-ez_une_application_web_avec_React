/*Star is a component used in the singleHouse page using for the rate of the house (in stars) wich is mapped and reppeat 5 times*/
const Star = (props) => {
    return (
        <svg className="rateStar" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={props.color}/>
        </svg>
    )
}

export default Star;