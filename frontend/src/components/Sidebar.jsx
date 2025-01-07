import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"; // Assuming you're using react-pro-sidebar
import {
  FaChartBar,
  FaMap,
  FaShoppingCart,
  FaBook,
  FaCalendar,
  FaPaintBrush,
} from "react-icons/fa"; // React Icons
import logo from "../assets/clg.png";


const Playground = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [rtl, setRtl] = useState(false);

  const menuItemStyles = {
    root: {
      fontSize: "14px",
      fontWeight: 400,
    },
    icon: {
      color: "#0098e5",
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    button: {
      "&:hover": {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
    },
  };

  return (
    <div className={`flex h-full`}>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        rtl={rtl}
        breakPoint="md"
        style={{ width: "250px" }} // Ensure the sidebar takes the full width it needs
      >
        <div className="flex px-1 py-2  flex-col h-full">
          <div className="flex-1 mb-8">
            <div className="px-6 mb-2">
              {/* <img src={logo}  className="" />  */}
            </div>
           
            <Menu menuItemStyles={menuItemStyles}>
              <SubMenu label="Link" icon={<FaChartBar />}>
                <MenuItem> Link</MenuItem>
                <MenuItem> Link</MenuItem>
                <MenuItem>Link</MenuItem>
              </SubMenu>
              <SubMenu label="Link" icon={<FaMap />}>
                <MenuItem>Link</MenuItem>
                <MenuItem> Link</MenuItem>
              </SubMenu>
            
            
            </Menu>

            <div className="px-6 mb-2 mt-8">
              <span
                className={`${
                  collapsed ? "opacity-0" : "opacity-70"
                } tracking-wide`}
              >
                Extra
              </span>
            </div>

            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem icon={<FaCalendar />}>Link</MenuItem>
              <MenuItem icon={<FaBook />}>Link</MenuItem>
            </Menu>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Playground;
