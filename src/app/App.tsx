import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../features/Navbar/Navbar"
import StartView from "../views/StartView"
import Translation from "../views/TranslationView"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<StartView />} />
          <Route path="/translation" element={<Translation />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
