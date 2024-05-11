import { NavLink } from "react-router-dom";


const NavList = () => {
    return(

        <ul className="flex flex-row gap-1 bg-secondary text-terceary">
           <li><NavLink to="/" exact="true">Home</NavLink></li>
           <li><NavLink to="/Tienda">Tienda</NavLink></li>
           <li><NavLink to="/help">Help</NavLink></li>
           <li><NavLink to="/noticias">Noticias</NavLink></li>
           <li><NavLink to="/preguntasFrecuentes">Preguntas Frecuentes</NavLink></li>
           

        </ul>
    )
}

export {NavList};