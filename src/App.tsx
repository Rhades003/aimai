
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/start"
import Game from "./pages/game";

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route index element={<Start />} />
          <Route path="/start" element={<Start />} />
          <Route path="game" element={<Game />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
