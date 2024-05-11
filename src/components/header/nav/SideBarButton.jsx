// import React, {useState} from "react";
import React, { useState } from "react";
import { SideBar } from "./SideBar";

const SideBarButton = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <button className="sideBar-logo-button" onClick={toggleSidebar}>
      {showSidebar ? 'Close' : 'SideBar'}
      {showSidebar && <SideBar />}
    </button>
  );
};

export { SideBarButton };