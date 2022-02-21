import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/porsches">Porsches!</Link>
            </h1>
            <button>
                <Link to="/porsches/sell">Sell Your Porsche!!!</Link>
            </button>
        </nav>
    )
}