import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaProdutos from "./pages/ListaProdutos";
import FormProduto from "./pages/FormProduto";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route path="/" element={<Layout />}>
          <Route index element={<ListaProdutos />} />
          <Route path="novo" element={<FormProduto />} />
          <Route path="editar/:id" element={<FormProduto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
