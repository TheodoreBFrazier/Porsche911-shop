import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function PorscheDetails() {
    const [porsche, setPorsche] = useState({});
    let { id } = useParams()
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(API + "/porsches/" + id)
            .then((response) => {
                setPorsche(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }), [id, API]

    const porscheDelete = () => {
        axios.delete(API + "/porsches/" + id)
            .then((response) => {
                navigate("/porsches")
            }).catch((error) => {
                console.log(error)
            })
    }

    return <article>
        <div>
            <div className="Show-porsche">
                <h1>{porsche.year}&nbsp;&nbsp;{porsche.name}</h1>
                <img src={porsche.image} alt={porsche.name} />
                <span><h6>Color:&nbsp;</h6>{porsche.color}</span>
                <span><h6>Generation:&nbsp;</h6>{porsche.generation}</span>
                <span><h6>Description:&nbsp;</h6></span>
                <span><h6>Rating:&nbsp;</h6>{porsche.rating}/5</span>
                <br />
                {porsche.description}

                <div className="Navigation">
                    <div>
                        <Link to="/porsches">
                            <button>Back</button>
                        </Link>
                    </div>
                    <div>
                        <Link to={`/porsches/${id}/edit`}>
                            <button>Edit</button>
                        </Link>
                        <div>
                            <button onClick={porscheDelete}>Delete</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </article>

}


export default PorscheDetails;