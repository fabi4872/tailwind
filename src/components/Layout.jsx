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
      <section className={`relative bg-[#1F2937] h-screen p-4 duration-150 ${(open) ? "w-60" : "w-24"}`}>
        {
          (open)

          &&

          
          <h3 className="absolute top-5 left-4 text-white font-bold uppercase">
            Mostaza
          </h3>
        }
        
        <button type="button" className={`absolute top-4 ${(open) ? "right-4" : "right-8 rotate-180"}`} onClick={ onClickMenu }>
          <IconMenu className="h-8 w-8 bg-white rounded-full hover:text-blue-500" />
        </button>


        
        <article className={`flex items-center text-[#98A3A2] font-bold tracking-wider hover:bg-[#111827] hover:text-blue-400 w-full h-12 rounded-md cursor-pointer mt-14 mb-4 ${(open) ? "justify-start" : "justify-center"}`}>
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
        </article>

        <article className={`flex items-center text-[#98A3A2] font-bold tracking-wider hover:bg-[#111827] hover:text-blue-400 w-full h-12 rounded-md cursor-pointer my-4 ${(open) ? "justify-start" : "justify-center"}`}>
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
        </article>

        <article className={`flex items-center text-[#98A3A2] font-bold tracking-wider hover:bg-[#111827] hover:text-blue-400 w-full h-12 rounded-md cursor-pointer my-4 ${(open) ? "justify-start" : "justify-center"}`}>
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
        </article>

        <article className={`flex items-center text-[#98A3A2] font-bold tracking-wider hover:bg-[#111827] hover:text-blue-400 w-full h-12 rounded-md cursor-pointer my-4 ${(open) ? "justify-start" : "justify-center"}`}>
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
        </article>
      </section>

      <section className="bg-white">

      </section>
    </main>
  )
}

export default Layout;
