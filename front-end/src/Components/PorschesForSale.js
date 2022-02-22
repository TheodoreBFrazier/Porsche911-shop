import axios from "axios";
import { useState, useEffect } from "react";
import { Porsche4Sale } from "./Porsche4Sale";

const API = process.env.REACT_APP_API_URL;

function Porsches() {
    const [porsches, setPorsches] = useState([]) //State of empty array

    useEffect(() => {
        axios.get( APT + "/porsches")
        .then((response) => {
            setPorsches(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }, [])


return (
    <div className="Available-porsche">
        <section>
            <table>
                <thead>
                    <th>Porsches for Sale!</th>
                </thead>
            </table>
            <tbody>
                {porsches.map((porsche) => {
                    return <Porsche />
                })}
            </tbody>
        </section>
    </div>
)


}

export default Porsches;