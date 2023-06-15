import PropTypes from "prop-types";
import IconLogout from "../Icons/IconLogout";

const SidebarFooter = ({ open }) => {
  return (
    <footer className={`duration-150 w-24 ${(open) && "w-60"}`}>
      <button type="button" className={`duration-150 flex justify-center items-center text-white bg-red-500 hover:bg-red-600 rounded-md py-2 w-16 ${(open) && "w-52"}`}>
        <IconLogout />
        <span className={`duration-150 origin-left uppercase font-semibold pl-2 ${(open) ? "inline" : "hidden"}`}>Cerrar sesión</span>
      </button>
    </footer>
  )
}

SidebarFooter.propTypes = {
  open: PropTypes.bool
}

export default SidebarFooter;
