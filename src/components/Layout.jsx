import { useState } from "react";
import IconMenu from "./Icons/IconMenu";
import IconOrder from "./Icons/IconOrder";
import IconProduct from "./Icons/IconProduct";
import IconReport from "./Icons/IconReport";
import IconShipment from "./Icons/IconShipment";

const Layout = () => {
  const [ open, setOpen ] = useState(true);

  const onClickMenu = () => {
    setOpen(!open);
  }

  return (
    <main className="flex">
      <section className={`bg-[#1F2937] h-screen p-4 duration-150 ${(open) ? "w-60" : "w-24"}`}>
        <header className={`flex items-center ${(open) ? "justify-between" : "justify-center"}`}>
          {
            (open)

            &&

            <h3 className="uppercase font-bold text-blue-300">
              Mostaza
            </h3>
          }
                        
          <button type="button" className={`${(!open) && "rotate-180"}`} onClick={ onClickMenu }>
            <IconMenu className="h-8 w-8 rounded-full bg-white hover:text-blue-600" />
          </button>
        </header>

        <article className="flex flex-col flex-wrap justify-between">
          <div className="h-auto">
            <button type="button" className={`flex items-center text-[#98A3A2] font-bold tracking-wider hover:bg-[#111827] hover:text-purple-300 w-full h-12 rounded-md mt-8 mb-4 ${(open) ? "justify-start" : "justify-center"}`}>
              {
                (open)

                ?

                <>
                  <IconReport className="h-6 w-6 mx-2" />
                  <span>
                    Reportes
                  </span>
                </>

                :

                <IconReport className="h-6 w-6" />
              }
            </button>

            <button type="button" className={`flex items-center text-[#98A3A2] font-bold tracking-wider hover:bg-[#111827] hover:text-purple-300 w-full h-12 rounded-md my-4 ${(open) ? "justify-start" : "justify-center"}`}>
              {
                (open)

                ?

                <>
                  <IconProduct className="h-6 w-6 mx-2" />
                  <span>
                    Productos
                  </span>
                </>

                :

                <IconProduct className="h-6 w-6" />
              }
            </button>

            <button type="button" className={`flex items-center text-[#98A3A2] font-bold tracking-wider hover:bg-[#111827] hover:text-purple-300 w-full h-12 rounded-md my-4 ${(open) ? "justify-start" : "justify-center"}`}>
              {
                (open)

                ?

                <>
                  <IconOrder className="h-6 w-6 mx-2" />
                  <span>
                    Pedidos
                  </span>
                </>

                :

                <IconOrder className="h-6 w-6" />
              }
            </button>

            <button type="button" className={`flex items-center text-[#98A3A2] font-bold tracking-wider hover:bg-[#111827] hover:text-purple-300 w-full h-12 rounded-md my-4 ${(open) ? "justify-start" : "justify-center"}`}>
              {
                (open)

                ?

                <>
                  <IconShipment className="h-6 w-6 mx-2" />
                  <span>
                    Envíos
                  </span>
                </>

                :

                <IconShipment className="h-6 w-6" />
              }
            </button>
          </div>

          <button type="button" className="uppercase text-white bg-purple-500 hover:bg-purple-600 rounded-md p-2">
            Cerrar sesión
          </button>
        </article>
      </section>

      <section className="bg-white">

      </section>
    </main>
  )
}

export default Layout;
