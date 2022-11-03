/*Arrow is a component using an arrow SVG type to display each arrow in the website (big as small, turned or not)*/

const Arrow = (props) => {
    return (
        <svg className={props.classes} id={props.ident} onClick={props.click} width="40" height="40" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg"> 
            <path onClick={(e)=> e.stopPropagation()} d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
        </svg>
    )
}

export default Arrow;