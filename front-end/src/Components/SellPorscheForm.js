import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SellPorscheForm() {
    let navigate = useNavigate();

    const [porsche, setPorsche] = useState({
        name: "",
        image: "",
        year: 0,
        color: "",
        description: "",
    });


    const sellPorsche = (porsche) => {
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
        sellPorsche();
    };

    return (
        <div className="form-box">
            <div className="Sell">

                <h1>Need to part with your Porsche 911?</h1>
                <h4>We know it's tough to part with your beloved Porsche 911, but enter the information <br /> about your car and we will find it a new home!</h4>

                <form onSubmit={handleSubmit}>


                    <label htmlFor="name">Model You're Selling (911 Carerra, 911 Turbo, etc) </label>
                    <br />
                    <br />
                    <input
                        id="name"
                        value={porsche.name}
                        type="text"
                        onChange={handleTextChange}
                        required
                    />
                    <br />
                    <br />
                    <label htmlFor="image">Add an Image</label>
                    <br />
                    <br />
                    <input
                        id="image"
                        type="text"
                        pattern="http[s]://.+"
                        placeholder="Image link"
                        onChange={handleTextChange}
                        required
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
                        required
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
                        required
                    />
                    <br />
                    <br />
                    <br />

                    <label htmlFor="description">Give a Short Description</label>
                    <br />
                    <br />
                    <input
                        id="description"
                        type="text"
                        placeholder="Insert a Short Description"
                        onChange={handleTextChange}
                        required
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