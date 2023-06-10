import PropTypes from "prop-types";
import IconLogout from "../Icons/IconLogout";

const SidebarFooter = ({ open }) => {
  return (
    <footer className={`absolute bottom-4 left-0 w-24 duration-150 ${(open) && "md:w-60"}`}>
      <button type="button" className={`duration-150 ml-4 flex justify-center items-center text-white bg-red-500 hover:bg-red-600 rounded-md py-2 w-16 ${(open) && "md:w-52"}`}>
        <IconLogout />
        <span className={`duration-150 origin-left uppercase font-semibold hidden pl-2 ${(open) && "md:inline"}`}>Cerrar sesión</span>
      </button>
    </footer>
  )
}

SidebarFooter.propTypes = {
  open: PropTypes.bool
}

export default SidebarFooter;
