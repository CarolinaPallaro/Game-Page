import {useState} from "react";

const TopButton = () =>{

    const [position, setPosition] = useState (0);

    window.addEventListener("scroll", ()=>{

        if(window.pageYOffset > 80){
            setPosition('fixed');
        }else{
            setPosition('absolute')
        }
    });
    
    return(
     <button 
     type="button"
     className="top-button" 
     onClick={()=>setPosition (window.pageYOffset)}>Top</button>
       

    )
}

export {TopButton};

