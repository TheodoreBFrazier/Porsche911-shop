import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navigation">
            <h3 className="home">
            <Link to="/">
                Home
            </Link>
            </h3>
            <h1 className="logo">
                <Link to="/porsches">Porsches!</Link>
            </h1>
            <button>
                <Link to="/porsches/new">Sell Your Porsche!!!</Link>
            </button>
        </nav>
    )
}