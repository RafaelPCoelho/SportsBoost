import React from "react";
import { Img } from "./..";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
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
      className={`${props.className} flex flex-col h-screen pt-[266px] top-0 md:pt-5 !sticky overflow-auto md:hidden`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "9px",
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "90px" } }}
        className="flex w-full flex-col self-stretch"
      >
        <div className="flex flex-col">
          <MenuItem
            icon={<Img src="img_airplane.svg" width={23} height={47} alt="airplane" className="h-[47px] w-[23px]" />}
          />
        </div>
        <div className="flex flex-col">
          <MenuItem
            icon={
              <Img
                src="img_esportes_1_1_42x42.png"
                width={42}
                height={42}
                alt="esportes1one"
                className="h-[42px] w-[42px] object-cover"
              />
            }
          />
        </div>
      </Menu>
    </Sidebar>
  );
}
