import { useState } from "react";
import IconMenu from "./Icons/IconMenu";
import IconOrder from "./Icons/IconOrder";
import IconProduct from "./Icons/IconProduct";
import IconReport from "./Icons/IconReport";
import IconShipment from "./Icons/IconShipment";
import IconLogout from "./Icons/IconLogout";
import IconConfiguration from "./Icons/IconConfiguration";

const Layout = () => {
  const [ open, setOpen ] = useState(true);

  const onClickMenu = () => {
    setOpen(!open);
  }

  return (
    <main className="flex h-screen">
      <section className={`bg-dark-purple p-4 duration-150 w-24 ${(open) && "md:w-60"}`}>
        <header className={`flex items-center justify-center ${(open) && "md:justify-between"}`}>
          {
            (open)

            &&

            <h3 className={`uppercase font-bold text-white hidden ${(open) && "md:inline"}`}>
              Mostaza
            </h3>
          }
                        
          <button type="button" className={`${(!open) && "rotate-180"}`} onClick={ onClickMenu }>
            <IconMenu className="h-8 w-8 text-gray-500 hover:text-gray-400 border border-gray-500 rounded-md" />
          </button>
        </header>

        <article className="flex flex-col flex-wrap justify-between mt-2">
          <div>
            <button type="button" className={`flex items-center text-gray-400 font-medium tracking-wider hover:bg-light-white hover:text-[#CCC] w-full h-12 rounded-md my-4 justify-center ${(open) && "md:justify-start"}`}>
              <IconReport className="h-6 w-6 mx-3 text-blue-400"/>
              <span className={`${!open ? "hidden" : "hidden md:inline"} origin-left`}>
                Reportes
              </span>
            </button>

            <button type="button" className={`flex items-center text-gray-400 font-medium tracking-wider hover:bg-light-white hover:text-[#CCC] w-full h-12 rounded-md my-4 justify-center ${(open) && "md:justify-start"}`}>
              <IconProduct className="h-6 w-6 mx-3 text-blue-400" />
                <span className={`${!open ? "hidden" : "hidden md:inline"} origin-left`}>
                  Productos
                </span>
            </button>

            <button type="button" className={`flex items-center text-gray-400 font-medium tracking-wider hover:bg-light-white hover:text-[#CCC] w-full h-12 rounded-md my-4 justify-center ${(open) && "md:justify-start"}`}>
              <IconOrder className="h-6 w-6 mx-3 text-blue-400" />
              <span className={`${!open ? "hidden" : "hidden md:inline"} origin-left`}>
                Pedidos
              </span>
            </button>

            <button type="button" className={`flex items-center text-gray-400 font-medium tracking-wider hover:bg-light-white hover:text-[#CCC] w-full h-12 rounded-md my-4 justify-center ${(open) && "md:justify-start"}`}>
              <IconShipment className="h-6 w-6 mx-3 text-blue-400" />
              <span className={`${!open ? "hidden" : "hidden md:inline"} origin-left`}>
                Envíos
              </span>
            </button>

            <button type="button" className={`flex items-center text-gray-400 font-medium tracking-wider hover:bg-light-white hover:text-[#CCC] w-full h-12 rounded-md my-4 justify-center ${(open) && "md:justify-start"}`}>
              <IconConfiguration className="h-6 w-6 mx-3 text-blue-400" />
              <span className={`${!open ? "hidden" : "hidden md:inline"} origin-left`}>
                Ajustes
              </span>
            </button>
          </div>

          <div className={`absolute bottom-4 left-0 w-24 duration-150 ${(open) && "md:w-60"}`}>
            <button type="button" className={`duration-150 ml-4 flex justify-center items-center text-white bg-blue-500 hover:bg-blue-600 rounded-md py-2 w-16 ${(open) && "md:w-52"}`}>
              <IconLogout />
              <span className={`duration-150 origin-left uppercase font-semibold hidden pl-2 ${(open) && "md:inline"}`}>Cerrar sesión</span>
            </button>
          </div>
        </article>
      </section>

      <section className="bg-white">

      </section>
    </main>
  )
}

export default Layout;
