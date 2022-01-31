import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useUser } from "../contextStore/UserContext"
import Navbar from "../features/Navbar/Navbar"
import ProfileView from "../views/ProfileView"
import StartView from "../views/StartView"
import TranslationView from "../views/TranslationView"
import "./App.css"

function App() {
  const { user } = useUser()
  return (
    <BrowserRouter>
      <div>
        {user && <Navbar />}
        <div className="container text-center mt-2">
          <Routes>
            <Route path="/" element={<StartView />} />
            <Route path="/translation" element={<TranslationView />} />
            <Route path="/profile" element={<ProfileView />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
