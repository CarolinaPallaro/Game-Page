import { HeaderPage, FooterPage, Main } from "./indexEstructure";

function BodyPage(){
    return(
        <div className='body-page'>
            <HeaderPage />
            <Main />
            <FooterPage />
        </div>
        
    )
}

export {BodyPage};