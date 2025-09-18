import { FaShoppingCart } from 'react-icons/fa';
import "./Carrito.css"
function Carrito(){
    return(
        <div className="container" >
            <button >
                <FaShoppingCart className="cart"/>
            </button>
        </div>
    )

}
export default Carrito;