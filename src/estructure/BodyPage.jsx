import { HeaderPage, FooterPage } from "./indexEstructure";

function BodyPage(){
    return(
        <div className='body-page bg-primary '>
            <HeaderPage />
            <FooterPage />
        </div>
        
    )
}

export {BodyPage};