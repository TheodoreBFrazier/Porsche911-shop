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
                setPorsche(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [id, API]);

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
                <h5>Color:&nbsp;{porsche.color}</h5>
                <h5>Generation:&nbsp;{porsche.generation}</h5>
                <h5>Rating:&nbsp;{porsche.rating}/5</h5>
                <h3>{porsche.description}</h3>

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
                        <div className="delete-bttn">
                            <button onClick={porscheDelete}>Not interested in this car.</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </article>

}


export default PorscheDetails;