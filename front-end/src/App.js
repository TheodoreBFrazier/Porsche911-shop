import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// IMPORT THE PAGES

import Home from "./Pages/Home"
import Index from "./Pages/Index"
import New from "./Pages/New"
import Generations from "./Pages/Generations"
import Show from "./Pages/Show"
import Edit from "./Pages/Edit"
import Contact from "./Components/ContactForm"

import NavBar from "./Components/NavBar"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/porsches" element={<Index />} />
          <Route path="/porsches/new" element={<New />} />
          <Route exact path="/porsches/:id" element={<Show />} />
          <Route path="/porsches/:id/edit" element={<Edit />}/> 
          <Route path="porsches/generations" element={<Generations />} />
          <Route path="porsches/contact" element={<Contact />} />
          </Routes>
        </main>

      </Router>
    </div>
  )
}

export default App;