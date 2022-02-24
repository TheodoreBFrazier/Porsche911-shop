import { Link } from "react-router-dom";

function Porsche4Sale({ porsche }) {
    return (
        <div className="porscheforsale">
            <img src={porsche.image} alt={porsche.name} />
            <Link to={`/porsches/${porsche.id}`}>
                <h1>{porsche.year}&nbsp;&nbsp;{porsche.name}</h1>
            </Link>
           <h2> ${porsche.price}.00 </h2>
        </div>
    )
}

export default Porsche4Sale