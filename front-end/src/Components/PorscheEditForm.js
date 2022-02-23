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
            .post(`${API}/porsches/${id}`, updatedPorsche)
            .then(
                () => {
                    navigate(`/porsches/${id}`);
                },
                (error) => console.log(error)
            )
            .catch((c) => console.warn("catch", c))
    }

    const handleTextChange = (event) => {
        setPorsche({ ...porsche, [event.target.id]: event.target.value });
    };


    useEffect(() => {
        axios.get(`${API}/porsches/${id}`).then(
            (response) => setPorsche(response)
        ).catch(() => navigate("/no-porsche-found"))
    }, [id, navigate]);


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
                    type="text"
                    pattern="http[s]*://.+"
                    placeholder="Image link"
                    onChange={handleTextChange}
                />
                <br />
                <br />
                <label htmlFor="year">Year of production</label>
                <br />
                <br />
                <input
                    id="year"
                    type="number"
                    placeholder="yyyy"
                    onChange={handleTextChange}
                />
                <br />
                <br />
                <label htmlFor="color">Car Color</label>
                <br />
                <br />
                <input
                    id="color"
                    type="text"
                    placeholder="Color"
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
                    type="description"
                    placeholder="Insert a Short Description"
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