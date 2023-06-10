import SidebarItem from "./SidebarItem";

const SidebarItemList = ({ sidebarMenuItems, open }) => {
  return (
    sidebarMenuItems.map((item) => (
      <SidebarItem key={ item.id } item={ item } open={ open } />
    ))
  )
}

export default SidebarItemList;
