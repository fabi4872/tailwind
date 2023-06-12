import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ item, open }) => {
  const navigate = useNavigate();

  return (
    <button 
      type="button" 
      className={`flex items-center gap-x-2 text-white font-medium tracking-wider hover:bg-light-white hover:text-[#CCC] w-full h-12 rounded-md my-1 justify-center ${(open) && "md:justify-start"}`}
      onClick={() => {navigate(item.link)}}
      >
      { item.component }
      <span className={`${!open ? "hidden" : "hidden md:inline"} origin-left`}>
        { item.title }
      </span>
    </button>
  )
}

SidebarItem.propTypes = {
  item: PropTypes.object,
  open: PropTypes.bool
};

export default SidebarItem;
