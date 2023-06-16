import PropTypes from "prop-types";
import IconMenu from "../Icons/IconMenu";

const SidebarHeader = ({ open, onClickMenu, nameShop }) => {
  return (
    <header className={`flex items-center justify-center duration-300 w-16 ${open && "justify-between w-52"}`}>
      <h3 className={`font-bold uppercase text-white ${open ? "inline" : "hidden"}`}>
        { nameShop }
      </h3>

      <button type="button" onClick={ onClickMenu }>
        <IconMenu className="h-8 w-8 rounded-md border border-gray-500 text-gray-500 hover:text-gray-400" />
      </button>
    </header>
  );
}

SidebarHeader.propTypes = {
  open: PropTypes.bool,
  onClickMenu: PropTypes.func,
  nameShop: PropTypes.string
};

export default SidebarHeader;
