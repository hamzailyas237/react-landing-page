

const Card = (props) => {
    console.log(props);
    return (

        <div className="card">
            <h4>{props.heading}</h4>
            <img src={props.img} />
            <div className='card-inner-one'>
                <p>{props.title}</p>
                <small>{props.titleDescription}</small>
            </div>

            <hr />

            <div className='card-inner-two'>
                <p>{props.para1}</p>
                <p>{props.para2}</p>
                <p>{props.para3}</p>
            </div>
        </div>



    )
}

export default Card;