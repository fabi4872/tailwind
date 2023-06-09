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
      <section className={`bg-[#1F2937] p-4 duration-150 ${(open) ? "w-60" : "w-24"}`}>
        <header className={`flex items-center ${(open) ? "justify-between" : "justify-center"}`}>
          {
            (open)

            &&

            <h3 className="uppercase font-bold text-blue-300">
              Mostaza
            </h3>
          }
                        
          <button type="button" className={`${(!open) && "rotate-180"}`} onClick={ onClickMenu }>
            <IconMenu className="h-8 w-8 text-gray-500 hover:text-gray-400 border border-gray-500 rounded-md" />
          </button>
        </header>

        <article className="flex flex-col flex-wrap justify-between">
          <div>
            <button type="button" className={`flex items-center text-[#98A3A2] font-medium tracking-wider hover:bg-[#111827] hover:text-violet-400 w-full h-12 rounded-md mt-6 mb-4 ${(open) ? "justify-start" : "justify-center"}`}>
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

            <button type="button" className={`flex items-center text-[#98A3A2] font-medium tracking-wider hover:bg-[#111827] hover:text-violet-400 w-full h-12 rounded-md my-4 ${(open) ? "justify-start" : "justify-center"}`}>
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

            <button type="button" className={`flex items-center text-[#98A3A2] font-medium tracking-wider hover:bg-[#111827] hover:text-violet-400 w-full h-12 rounded-md my-4 ${(open) ? "justify-start" : "justify-center"}`}>
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

            <button type="button" className={`flex items-center text-[#98A3A2] font-medium tracking-wider hover:bg-[#111827] hover:text-violet-400 w-full h-12 rounded-md my-4 ${(open) ? "justify-start" : "justify-center"}`}>
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

            <button type="button" className={`flex items-center text-[#98A3A2] font-medium tracking-wider hover:bg-[#111827] hover:text-violet-400 w-full h-12 rounded-md my-4 ${(open) ? "justify-start" : "justify-center"}`}>
              {
                (open)

                ?

                <>
                  <IconConfiguration className="h-6 w-6 mx-2" />
                  <span>
                    Ajustes
                  </span>
                </>

                :

                <IconConfiguration className="h-6 w-6" />
              }
            </button>
          </div>

          {
            (open)

            ?

            <button type="button" className="flex justify-center items-center bottom-4 absolute uppercase text-white bg-blue-500 hover:bg-blue-600 rounded-md py-2 font-semibold duration-150 w-52">
              Cerrar sesión
            </button>

            :

            <button type="button" className="flex justify-center items-center bottom-4 absolute uppercase text-white bg-blue-500 hover:bg-blue-600 rounded-md py-2 font-semibold w-16">
              <IconLogout />
            </button>
          }
        </article>
      </section>

      <section className="bg-white">

      </section>
    </main>
  )
}

export default Layout;
