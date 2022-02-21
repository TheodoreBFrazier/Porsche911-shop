import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// IMPORT THE PAGES

import Home from "./Pages/Home"
import New from "./Pages/New"
import Generations from "./Pages/Generations"


import NavBar from "./Components/NavBar"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Route path="/" element={<Home />} />
          <Route path="/porsches/new" element={<New />} />
          <Route path="porsches/generations" element={<Generations />} />
        </main>

      </Router>
    </div>
  )
}

export default App;