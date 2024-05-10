import React, {useState} from "react";

const TopButton = () =>{

    const [position, setPosition] = useState ();

    window.addEventListener("scroll", ()=>{

        if(window.pageYOffset > 80){
            setPosition('fixed');
        }else{
            setPosition('absolute')
        }
    });
    
    return(
     <button 
     className="back-to-the-top" 
     onClick={()=>setPosition (window.pageYOffset)}>Top</button>
       

    )
}

export {TopButton};

