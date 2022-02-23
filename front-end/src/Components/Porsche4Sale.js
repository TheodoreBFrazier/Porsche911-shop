import { Link } from "react-router-dom";

function Porsche4Sale({porsche}) {
    return (
        <div className="Snack">
            <img src={porsche.image} alt={porsche.name} />
            <Link to={`/porsches/${porsche.id}`}>
                <h4>{porsche.name}</h4>
                </Link>
        </div>
    )
}

export default Porsche4Sale