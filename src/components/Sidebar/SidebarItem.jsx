import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ item, open, isMobile, onClickMenu }) => {
  const navigate = useNavigate();
  const onClickButton = (link) => {
    (isMobile && open) && onClickMenu();
    navigate(link);
  }

  return (
    <button
      type="button"
      className={`my-1 flex h-12 w-full items-center gap-x-2 rounded-md font-medium tracking-wider text-white hover:bg-light-white hover:text-[#CCC] ${
        open ? "justify-start" : "justify-center"
      }`}
      onClick={() => onClickButton(item.link)}
    >
      { item.component }
      <span className={`${!open ? "hidden" : "inline"} origin-left`}>
        { item.title }
      </span>
    </button>
  );
}

SidebarItem.propTypes = {
  item: PropTypes.object,
  open: PropTypes.bool,
  isMobile: PropTypes.bool,
  onClickMenu: PropTypes.func
};

export default SidebarItem;
