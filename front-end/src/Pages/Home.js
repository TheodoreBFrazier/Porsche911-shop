import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="Home-data">
        <h1>Pratical yet powerful. Timeless yet subtle. </h1>
        <p>A website dedicated to my favorite car <br /> one of the most famous cars of all time.</p>
        <h1>The Porsche 911</h1>
        <button className="genLink">
          <Link to="/porsches/generations">History of the 911</Link>
        </button>
      </div>
      <img src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/porsche_newsroom/Produkte/911/1-Mio.-911/b-CZ16MOD0007_rgb.jpg/jcr:content/b-CZ16MOD0007_rgb.jpg" alt="All porsche gens" />
    </div>
  )
}

export default Home;