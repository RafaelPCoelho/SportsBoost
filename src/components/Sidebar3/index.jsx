import React from "react";
import { Img } from "./..";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar3({ ...props }) {
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
      className={`${props.className} flex flex-col h-screen pt-[265px] top-0 md:pt-5 !sticky overflow-auto md:hidden`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: 0,
            paddingLeft: "45px",
            paddingRight: "45px",
          },
        }}
        className="flex w-full flex-col"
      >
        <div className="flex flex-col">
          <MenuItem
            icon={<Img src="img_airplane.svg" width={25} height={24} alt="airplane" className="h-[24px] w-[25px]" />}
          />
        </div>
        <div className="mt-[126px] flex flex-col">
          <MenuItem
            icon={
              <Img
                src="img_esportes_1_1_42x42.png"
                width={25}
                height={24}
                alt="esportes1one"
                className="h-[24px] w-[25px] object-cover"
              />
            }
          />
        </div>
        <div className="mt-[465px] flex self-start">
          <MenuItem
            icon={
              <Img
                src="img_arrow_left_white_a700.svg"
                width={25}
                height={24}
                alt="arrowleft"
                className="h-[24px] w-[25px]"
              />
            }
          />
        </div>
      </Menu>
    </Sidebar>
  );
}
