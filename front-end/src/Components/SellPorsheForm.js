import axios from "axios";
import { useState } from "react"
import { userNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SellPorscheForm() {
    let navigate = userNavigate

    const [porsche, setPorsche] = useState({
        model: "",
        image: "",
        year: 0,
        color: "",
    })


    const sellPorsche = () => {
        axios
            .post(`${API}/porsches`, porsche)
            .then(
                () => {
                    navigate(`/porsches`);
                },
                (error) => console.log(error)
            )
            .catch((c) => console.warn("catch", c))
    }

    const handleTextChange = (event) => {
        setPorsche({ ...porsche, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sellPorsche()
    };
    return (
        <div className="Sell">

            <form onSubmit={handleSubmit}>

                <label htmlFor="model">Model You're Selling</label>
                <input
                    id="model"
                    value={porsche.model}
                    type="text"
                    onChange={handleTextChange}
                />

                <label htmlFor="image">Add an Image</label>
                <input
                    id="image"
                    type="text"
                    pattern="http[s]*//.+"
                    placeholder="Image link"
                    onChange={handleTextChange}
                />

                <label htmlFor="year">Year of production</label>
                <input
                    id="year"
                    type="number"
                    placeholder="yyyy"
                    onChange={handleTextChange}
                />

                <label htmlFor="color">Car Color</label>
                <input
                    id="color"
                    type="text"
                    placeholder="Color"
                    onChange={handleTextChange}
                />

                <br />

                <input type="submit" />

            </form>
        </div>
    );


} 

export default SellPorscheForm;