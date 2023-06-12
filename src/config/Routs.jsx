import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Reports from "../components/Pages/Reports";
import Products from "../components/Pages/Products";
import Orders from "../components/Pages/Orders";
import Shipping from "../components/Pages/Shipping";
import Configurations from "../components/Pages/Configurations";


const Routs = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/reportes" element={<Reports />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/pedidos" element={<Orders />} />
        <Route path="/envios" element={<Shipping />} />
        <Route path="/ajustes" element={<Configurations />} />
        <Route path="/*" element={<Reports />} />
      </Route>
    </Routes>
  )
}
  
export default Routs;
