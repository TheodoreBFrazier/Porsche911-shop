import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/">
Home
            </Link>
            <h1>
                <Link to="/porsches">Porsches!</Link>
            </h1>
            <button>
                <Link to="/porsches/new">Sell Your Porsche!!!</Link>
            </button>
        </nav>
    )
}