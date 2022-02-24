import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"


const API = process.env.REACT_APP_API_URL;


function PorscheEditForm() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [porsche, setPorsche] = useState({
        name: "",
        image: "",
        year: 0,
        color: "",
        description: "",
    })


    const updatePorsche = (updatedPorsche) => {
        axios
            .put(`${API}/porsches/${id}`, updatedPorsche)
            .then((response) => {
                setPorsche(response.data);
                navigate(`/porsches/${id}`);
            })
            .catch((c) => console.warn("catch", c))
    };

    const handleTextChange = (event) => {
        setPorsche({ ...porsche, [event.target.id]: event.target.value });
    };

    useEffect(() => {
        axios.get(`${API}/porsches/${id}`)
            .then((response) => {
                setPorsche(response.data);
            })
            .catch((error) => console.error(error))
    }, [id]);


    const handleSubmit = (event) => {
        event.preventDefault();
        updatePorsche(porsche)
    };
    
    return (
        <div className="Edit">

            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Model You're Selling (911 Carerra, 911 Turbo, etc) </label>
                <br />
                <br />
                <input
                    id="name"
                    value={porsche.name}
                    type="text"
                    onChange={handleTextChange}
                />
                <br />
                <br />
                <label htmlFor="image">Add an Image</label>
                <br />
                <br />
                <br />
                <br />
                <input
                    id="image"
                    value={porsche.image}
                    type="text"
                    pattern="http[s]*://.+"
                    onChange={handleTextChange}
                />
                <br />
                <br />
                <label htmlFor="year">Year of production</label>
                <br />
                <br />
                <input
                    id="year"
                    value={porsche.year}
                    type="number"
                    onChange={handleTextChange}
                />
                <br />
                <br />
                <label htmlFor="color">Car Color</label>
                <br />
                <br />
                <input
                    id="color"
                    value={porsche.color}
                    type="text"
                    onChange={handleTextChange}
                />

                <br />
                <br />
                <br />

                <label htmlFor="description">Give a Short Description</label>
                <br />
                <br />
                <br />
                <input
                    id="color"
                    value={porsche.description}
                    type="description"
                    onChange={handleTextChange}
                />

                <br />
                <br />
                <br />

                <input type="submit" />

            </form>
            <Link to={`/porsches/${id}`}>
                <button>Nevermind!</button>
            </Link>
        </div>
    );


}

export default PorscheEditForm;