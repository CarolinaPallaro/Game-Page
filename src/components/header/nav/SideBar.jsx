const SideBar = () => {
    return(
            <div className="sideBar-items flex flex-col-2 bg-tertiary-light 
             right-3 h-40 w-80 border text-justify items-center space-x-6
             rounded-lg shadow-md">

                <ul className="ul-1">
                <font>Mas Jugados</font>
                <li>Fornite</li>
                <li>Ligue Of Legends</li>
                <li>Fallout 76</li>
                <li>Mi corazón</li>
                </ul>

                <ul className="ul-2">
                    <font>Descubrir</font>
                    <li>Tiendaa</li>
                    <li>Arte</li>
                    <li>Merch</li>
                </ul>




            </div>
       
    )
}

export {SideBar};