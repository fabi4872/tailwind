import IconOrder from "./Icons/IconOrder";
import IconProduct from "./Icons/IconProduct";
import IconReport from "./Icons/IconReport";
import IconShipment from "./Icons/IconShipment";

const Layout = () => {
  return (
    <main className="flex">
      <section className="bg-[#1F2937] w-60 h-screen p-4">
        <article className="flex justify-start items-center text-[#98A3A2] font-bold tracking-wider hover:bg-[#111827] w-full h-12 rounded-md cursor-pointer my-4">
          <IconReport />
          <span>
            Reportes
          </span>
        </article>

        <article className="flex justify-start items-center text-[#98A3A2] font-bold tracking-wider hover:bg-[#111827] w-full h-12 rounded-md cursor-pointer my-4">
          <IconProduct />
          <span>
            Productos
          </span>
        </article>

        <article className="flex justify-start items-center text-[#98A3A2] font-bold tracking-wider hover:bg-[#111827] w-full h-12 rounded-md cursor-pointer my-4">
          <IconOrder />
          <span>
            Pedidos
          </span>
        </article>

        <article className="flex justify-start items-center text-[#98A3A2] font-bold tracking-wider hover:bg-[#111827] w-full h-12 rounded-md cursor-pointer my-4">
          <IconShipment />
          <span>
            Envíos
          </span>
        </article>
      </section>

      <section className="bg-white">

      </section>
    </main>
  )
}

export default Layout;
