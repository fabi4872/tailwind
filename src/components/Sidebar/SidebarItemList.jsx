import PropTypes from "prop-types";
import SidebarItem from "./SidebarItem";

const SidebarItemList = ({ sidebarMenuItems, open }) => {
  return (
    sidebarMenuItems.map((item) => (
      <SidebarItem key={ item.id } item={ item } open={ open } />
    ))
  )
}

SidebarItemList.propTypes = {
  sidebarMenuItems: PropTypes.array,
  open: PropTypes.bool
}

export default SidebarItemList;
