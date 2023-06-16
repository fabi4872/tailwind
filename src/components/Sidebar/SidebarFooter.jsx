import PropTypes from "prop-types";
import IconLogout from "../Icons/IconLogout";

const SidebarFooter = ({ open }) => {
  return (
    <footer className={`${(open) ? "w-60" : "w-24"} absolute bottom-4 left-4`}>
      <button type="button" className={`flex justify-center items-center text-white bg-red-500 hover:bg-red-600 rounded-md py-2 ${(open) ? "w-52 duration-300" : "w-16 duration-0"}`}>
        <IconLogout />
        <span className={`origin-left uppercase font-semibold pl-2 ${(open) ? "inline" : "hidden"}`}>Cerrar sesión</span>
      </button>
    </footer>
  )
}

SidebarFooter.propTypes = {
  open: PropTypes.bool
}

export default SidebarFooter;
