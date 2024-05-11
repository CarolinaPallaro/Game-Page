
import { FooterPage, NavBarPage } from "./estructure/indexEstructure"
import { SideBarButton } from "./components"
import React from "react";

function App() {
 

  return (
    <>
    <div className="App">
        <div className="nav flex flex-row"
   >
          <SideBarButton/>
              <div className="ul-links">
                <NavBarPage />
              </div>
        </div>

    
    <div className="footer flex flex-col-2 ">

    <FooterPage />

    </div>





     </div>

      
    </>
   
  )
}

export default App
