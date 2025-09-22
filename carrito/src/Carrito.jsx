import { FaShoppingCart } from 'react-icons/fa';
import { useContext, useState, useEffect } from 'react';
import { ThingsContext } from "./App";
import "./Carrito.css"
import Modal from './Modal';
function Carrito(){
    const {arrayThing, setArrayThing } = useContext(ThingsContext)
    const [count, setCount] = useState(-1)
    const [isOpen, setIsOpen] = useState(false)
    console.log(arrayThing)
    useEffect(()=>{
        setCount(arrayThing.length)
    }, [arrayThing])

    const handleCarrito=()=>{
        setIsOpen(true)
    }
    const onClose = () =>{
        setIsOpen(false)
    }
    return(
        <div className="container" >
            <button onClick={handleCarrito}>
                <FaShoppingCart className="cart"/>
            </button>
                {count > 0 && <span>{count}</span> }
            <Modal isOpen={isOpen} onClose={onClose} data={{arrayThing,setArrayThing}} />
        </div>
    )

}
export default Carrito;