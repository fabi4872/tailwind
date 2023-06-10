import { useState } from "react";
import IconOrder from "./Icons/IconOrder";
import IconProduct from "./Icons/IconProduct";
import IconReport from "./Icons/IconReport";
import IconShipment from "./Icons/IconShipment";
import IconConfiguration from "./Icons/IconConfiguration";
import Sidebar from "./Sidebar/Sidebar";

const nameShop = "Mostaza";
const sidebarMenuItems = [
  {
    id: 1,
    title: "Reportes",
    component: <IconReport className="h-6 w-6 mx-3 text-blue-400"/>
  },
  {
    id: 2,
    title: "Productos",
    component: <IconProduct className="h-6 w-6 mx-3 text-blue-400"/>
  },
  {
    id: 3,
    title: "Pedidos",
    component: <IconOrder className="h-6 w-6 mx-3 text-blue-400"/>
  },
  {
    id: 4,
    title: "Envíos",
    component: <IconShipment className="h-6 w-6 mx-3 text-blue-400"/>
  },
  {
    id: 5,
    title: "Ajustes",
    component: <IconConfiguration className="h-6 w-6 mx-3 text-blue-400"/>
  }
];

const Layout = () => {
  const [ open, setOpen ] = useState(true);

  const onClickMenu = () => {
    setOpen(!open);
  }

  return (
    <main className="flex h-screen">
      <Sidebar open={ open } onClickMenu={ onClickMenu } nameShop={ nameShop } sidebarMenuItems={ sidebarMenuItems } />
      <section className="bg-white">
      </section>
    </main>
  )
}

export default Layout;
