import "./Modal.css"

function Modal({isOpen, onClose, data}){
    if(!isOpen) return null;
    if(!data) return null;


    const { arrayThing, setArrayThing } = data;

    const handleClick = (element)=>{
        const newArray = arrayThing.filter((_) => _ !== element)
        setArrayThing(newArray)
    }
    return(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e)=> e.stopPropagation()}>
                <h3 className="title-modal">
                    {arrayThing.length > 0 ? "Carrito" : "El carrito esta vacio"}
                </h3>
                <div className="modal-header">
                    <button className="modal-close" onClick={onClose}>
                        X
                    </button>
                </div>
                <div className="display">
                    {arrayThing.map((thing, index)=>(
                        <div key={thing.id} className="mainwrraper">
                            <img src={thing.source} alt={thing.name} className="image"/>
                            <div className="name-wrraper">
                                <h3 className="thing-name">
                                    {thing.name}
                                </h3>
                                <button className="buttons"onClick={()=> handleClick(thing)}>remove from cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )



}

export default Modal;