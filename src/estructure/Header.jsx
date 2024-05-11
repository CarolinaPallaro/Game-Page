import { NavBarPage } from "./NavBarPage";
import { SideBarButton } from "../components/index";
const Header = ()=>{
    return(

      <header className="header">
     
       <SideBarButton />
        <NavBarPage />
        
    

      </header>

    )
}

export {Header};