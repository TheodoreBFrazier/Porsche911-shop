import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <button className="genLink">
        <Link to="/porsches/generations">All Generations!</Link>
      </button>
      <img src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/porsche_newsroom/Produkte/911/1-Mio.-911/b-CZ16MOD0007_rgb.jpg/jcr:content/b-CZ16MOD0007_rgb.jpg" alt="All porsche gens"/>
    </div>
  )
}

export default Home;