import axios from "axios";
import { useEffect } from "react";


const API = process.env.REACT_APP_API_URL;

function PorscheEditForm() {
    let { id } = useParams()
    let navigate = userNavigate

    const [porsche, setPorsche] = useState({
        model: "",
        image: "",
        year: 0,
        color: "",
    })


    const updatePorsche = (updatedPorsche) => {
        axios
            .post(`${API}/porsches/${id}`, updatedPorsche)
            .then(
                () => {
                    navigate(`/porsches`);
                },
                (error) => console.log(error)
            )
            .catch((c) => console.warn("catch", c))
    }

    useEffect(() => {
        axios.get(`${API}/porsches/${id}`).then(
            (response) => setPorsche(response)
        ).catch(() => navigate("/no-porsche-found"))
    }, [id]);


    const handleSubmit = (event) => {
        event.preventDefault();
        updatePorsche(porsche)
    };
    return (
        <div className="Edit">

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

export default PorscheEditForm;