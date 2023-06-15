import PropTypes from "prop-types";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarItemList from "./SidebarItemList";

const Sidebar = ({ open, onClickMenu, nameShop, sidebarMenuItems, className }) => {
  return (
    <section className={`${className} bg-dark-purple p-4 duration-150 w-24 ${(open) && "w-60"}`}>
      <SidebarHeader open={ open } onClickMenu={ onClickMenu } nameShop={ nameShop } />
      <article className="flex flex-col justify-between mt-3">
        <SidebarItemList sidebarMenuItems={ sidebarMenuItems } open={ open } />
        <SidebarFooter open={ open } /> 
      </article>
    </section>
  )
}

Sidebar.propTypes = {
  open: PropTypes.bool,
  onClickMenu: PropTypes.func,
  nameShop: PropTypes.string,
  sidebarMenuItems: PropTypes.array,
  className: PropTypes.string
}

export default Sidebar;
