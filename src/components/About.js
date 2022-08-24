

const About = (props) => {

    return (
        <div className='about'>
            <h4> <span>{props.span}</span> {props.heading} </h4>
            <hr />
            <img src={props.src} />
            <p>{props.description}</p>
            <button>{props.btnText}</button>
        </div>
    )
}

export default About

