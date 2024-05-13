import {useState} from "react";
import upArrow from '/public/up.svg'
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
     className="top-button  bg-white w-6 h-6" 
     onClick={()=>setPosition (window.pageYOffset)}> <img src={upArrow} alt="arrow" /> </button>
       

    )
}

export {TopButton};

