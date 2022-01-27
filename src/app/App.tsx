import { BrowserRouter, Route, Routes } from "react-router-dom"
import StartView from "../views/StartView"
import Translation from "../views/TranslationView"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartView />} />
          <Route path="/translation" element={<Translation />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
