import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import IconOrder from "./Icons/IconOrder";
import IconProduct from "./Icons/IconProduct";
import IconReport from "./Icons/IconReport";
import IconShipment from "./Icons/IconShipment";
import IconConfiguration from "./Icons/IconConfiguration";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

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
  const [ isMobile, setIsMobile ] = useState(false);

  const onClickMenu = () => {
    setOpen(!open);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Establece 768 como el ancho máximo para considerar la resolución "md"
    };

    handleResize(); // Verifica el tamaño de la pantalla al cargar el componente

    window.addEventListener("resize", handleResize); // Escucha los cambios de tamaño de la pantalla

    return () => {
      window.removeEventListener("resize", handleResize); // Limpia el listener cuando el componente se desmonta
    };
  }, []);

  return (
    <main className={`flex h-screen`}>
      <Sidebar open={ open } onClickMenu={ onClickMenu } nameShop={ nameShop } sidebarMenuItems={ sidebarMenuItems } className={`h-screen ${isMobile && open ? "fixed" : ""}`} isMobile={ isMobile } />
      <section className="flex flex-col justify-start flex-grow">
        <Navbar />
        <article className="m-4 border border-gray-300 rounded-md flex-grow" onClick={(isMobile && open) ? () => onClickMenu() : null}>
          { children }
          <Outlet />
        </article>
      </section>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout;
