import React from "react";
import { Img } from "./..";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar2({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}
  return (
    <Sidebar
      {...props}
      width="120px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`${props.className} flex flex-col h-screen pt-[310px] top-0 md:pt-5 md:p-5 !sticky overflow-auto md:hidden`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: 0,
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "47px" } }}
        className="flex w-full flex-col self-stretch"
      >
        <MenuItem
          icon={<Img src="img_arrow_left.svg" width={17} height={33} alt="arrowleft" className="h-[33px] w-[17px]" />}
        />
        <MenuItem
          icon={
            <Img
              src="img_esportes_1_1.png"
              width={56}
              height={56}
              alt="esportes1one"
              className="h-[56px] w-[56px] object-cover"
            />
          }
        />
      </Menu>
    </Sidebar>
  );
}
