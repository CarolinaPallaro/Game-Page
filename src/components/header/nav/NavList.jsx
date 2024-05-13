import { Link } from "react-router-dom";

const NavList = () => {
    return(

        <ul className="flex flex-row space-x-6 ">
           <Link to="/" >Home</Link>
           <Link to="/Tienda">Tienda</Link>
           <Link to="/help">Help</Link>
           <Link to="/noticias">Noticias</Link>
           <Link to="/preguntasFrecuentes">Preguntas Frecuentes</Link>
           

        </ul>
    )
}

export {NavList};