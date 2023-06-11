import './card.css'


const Card = (props) => {
        return (
            <div className=" container ">
                <div className="card">
                    <div className="card-body">
                    <h3>{props.title}</h3>
                     <p>{props.content}</p>
                    <img className='card-img'src={props.image} alt="" />
                </div>
                </div>
                </div>

            
            
        )
}

export default Card;