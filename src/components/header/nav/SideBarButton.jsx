// import React, {useState} from "react";
import { useState } from "react";
import { SideBar } from "./SideBar";
import arrow from '/public/arrow.svg'

const SideBarButton = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


  return (
    <button 
    type="button"
    className="sideBar-logo-button h-5 w-5 left-3" 
    onClick={toggleSidebar}>
      <img src={arrow} alt="arrow"></img>
      {showSidebar ? ' ' : ' '}
      {showSidebar && <SideBar/>}
    </button>
  );
};

export { SideBarButton };