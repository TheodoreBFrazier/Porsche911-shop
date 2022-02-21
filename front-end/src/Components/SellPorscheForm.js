import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SellPorscheForm() {
    let navigate = useNavigate();

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
        <div className="form-box">
        <div className="Sell">

            <h1>Need to part with your Porsche 911?</h1>
            <h4>We know it's tough to part with your beloved Porsche 911, but enter the information <br /> about your car and we will find it a new home!</h4>

            <form onSubmit={handleSubmit}>

                <label htmlFor="model">Model You're Selling</label>
                <br />
                <input
                    id="model"
                    value={porsche.model}
                    type="text"
                    onChange={handleTextChange}
                />
                <br />
                <br />
                <label htmlFor="image">Add an Image</label>
                <br />
                <input
                    id="image"
                    type="text"
                    pattern="http[s]*//.+"
                    placeholder="Image link"
                    onChange={handleTextChange}
                />
                <br />
                <br />
                <label htmlFor="year">Year of production</label>
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
                <input
                    id="color"
                    type="text"
                    placeholder="Color"
                    onChange={handleTextChange}
                />

                <br />
                <br />
                <br />

                <input type="submit" />

            </form>
        </div>
        </div>
    );


}

export default SellPorscheForm;