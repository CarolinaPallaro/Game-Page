import { useState } from "react";

const LoginButton = () => {

    const [showLogin, setShowLogin] = useState (false);

    function handleClick()(=>{
        setShowLogin(!showLogin)
        });
    }
    
   

    return (
       <button
       className="login-button"
       onClick={}
       >

       </button>
        
    )
}

export {LoginButton};