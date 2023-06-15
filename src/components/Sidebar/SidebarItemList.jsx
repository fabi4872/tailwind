import PropTypes from "prop-types";
import SidebarItem from "./SidebarItem";

const SidebarItemList = ({ sidebarMenuItems, open, isMobile, onClickMenu }) => {
  return (
    sidebarMenuItems.map((item) => (
      <SidebarItem key={ item.id } item={ item } open={ open } isMobile={ isMobile } onClickMenu={ onClickMenu } />
    ))
  )
}

SidebarItemList.propTypes = {
  sidebarMenuItems: PropTypes.array,
  open: PropTypes.bool,
  isMobile: PropTypes.bool,
  onClickMenu: PropTypes.func
}

export default SidebarItemList;
