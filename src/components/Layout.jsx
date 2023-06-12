import { useState } from "react";
import PropTypes from "prop-types";
import IconOrder from "./Icons/IconOrder";
import IconProduct from "./Icons/IconProduct";
import IconReport from "./Icons/IconReport";
import IconShipment from "./Icons/IconShipment";
import IconConfiguration from "./Icons/IconConfiguration";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

const nameShop = "Mostaza";
const sidebarMenuItems = [
  {
    id: 1,
    title: "Reportes",
    link: "/reportes",
    component: <IconReport className="h-6 w-6 mx-2 text-icon-menu-cyan"/>
  },
  {
    id: 2,
    title: "Productos",
    link: "/productos",
    component: <IconProduct className="h-6 w-6 mx-2 text-icon-menu-cyan"/>
  },
  {
    id: 3,
    title: "Pedidos",
    link: "/pedidos",
    component: <IconOrder className="h-6 w-6 mx-2 text-icon-menu-cyan"/>
  },
  {
    id: 4,
    title: "Envíos",
    link: "/envios",
    component: <IconShipment className="h-6 w-6 mx-2 text-icon-menu-cyan"/>
  },
  {
    id: 5,
    title: "Ajustes",
    link: "/ajustes",
    component: <IconConfiguration className="h-6 w-6 mx-2 text-icon-menu-cyan"/>
  }
];

const Layout = ({ children }) => {
  const [ open, setOpen ] = useState(true);

  const onClickMenu = () => {
    setOpen(!open);
  }

  return (
    <main className="flex h-screen">
      <Sidebar open={ open } onClickMenu={ onClickMenu } nameShop={ nameShop } sidebarMenuItems={ sidebarMenuItems } />
      <section className="flex flex-col justify-start flex-grow">
        <Navbar />
        <article className="m-4 border border-gray-300 rounded-md flex-grow">
          { children }
        </article>
      </section>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout;
