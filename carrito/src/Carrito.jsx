import { FaShoppingCart } from 'react-icons/fa';
import { useContext, useState, useEffect } from 'react';
import { ThingsContext } from "./App";
import "./Carrito.css"
function Carrito(){
    const value = useContext(ThingsContext)
    const [count, setCount] = useState(-1)

    useEffect(()=>{
    
        setCount(count+1)
        
    }, [value])
    return(
        <div className="container" >
            <button >
                <FaShoppingCart className="cart"/>
            </button>
                {count > 0 && <span>{count}</span> }
                
        </div>
    )

}
export default Carrito;