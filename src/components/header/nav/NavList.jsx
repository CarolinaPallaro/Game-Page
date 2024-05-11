import { NavLink } from "react-router-dom";


const NavList = () => {
    return(

        <ul>
           <li><NavLink exact to="/">Home</NavLink></li>
           <li><NavLink to="/tienda">Tienda</NavLink></li>
           <li><NavLink to="/help">Help</NavLink></li>
           <li><NavLink to="/noticias">Noticias</NavLink></li>
           <li><NavLink to="/preguntasFrecuentes">Preguntas Frecuentes</NavLink></li>
           

        </ul>
    )
}

export {NavList};