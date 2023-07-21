import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "../pages/Inicio"
import Cardapio from "../pages/Cardapio"

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cardapio" element={<Cardapio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
