import axios from "axios";
import { useState, useEffect } from "react";
import  Porsche4Sale from "./Porsche4Sale";

const API = process.env.REACT_APP_API_URL;

function PorschesForSale() {
    const [porsches, setPorsches] = useState([]) //State of empty array

    useEffect(() => {
        axios.get(API + "/porsches")
            .then((response) => {
                setPorsches(response.data);
            }).catch((error) => {
                console.log(error)
            })
    }, [])


    return (
        <div className="available-porsche">
            <section>
                <tbody className="forsale-arr">
                    {porsches.map((porsche) => {
                        return <Porsche4Sale key={porsche.id} porsche={porsche} />
                    })}
                </tbody>
            </section>
        </div>
    )


}

export default PorschesForSale;