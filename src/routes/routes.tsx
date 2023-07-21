import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "../pages/Inicio"
import Cardapio from "../pages/Cardapio"

import Menu from "../components/Menu"
import PaginaPadrao from "../components/PaginaPadrao"
import Sobre from "../pages/Sobre"

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
          </Route>
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
