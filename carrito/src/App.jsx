import { useState, createContext } from "react";
import "./App.css"
import Carrito from "./Carrito";


export const ThingsContext = createContext()
function App(){
  const things = [
    {name: "canarias", id:1, source:"fa"},
    {name: "verdecita", id:2, source:"fa"},
    {name: "sara", id:3, source:"fa"},
    {name: "baldo", id:4, source:"fa"},
    {name: "playadito", id:5, source:"fa"},
  ]

  const [arrayThing, setArrayThing] = useState([])
  const handleClick = (element)=>{
    setArrayThing([...arrayThing, element])
  }
  



  return(
    <div className="main">
      <div className="wrraper">
        <h2 className="title">Carrito de compras</h2>
          <ThingsContext.Provider value={{arrayThing, setArrayThing}}>
            <Carrito />
          </ThingsContext.Provider>
        
        <div className="things-container">
          {things.map((thing) => (
            <div key={thing.id} className="mainwrraper">
              <img src={thing.source} alt={thing.name} className="image"/>
              <div className="name-wrraper">
                <h3 className="thing-name">
                  {thing.name}
                </h3>
                <button className="add-cart" onClick={()=> handleClick(thing)}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;