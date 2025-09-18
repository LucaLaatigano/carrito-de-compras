import "./App.css"
import Carrito from "./Carrito";
function App(){


  const things = [
    {name: "canarias", id:1, source:"./src/images/canarias.jpg"},
    {name: "verdecita", id:2, source:"./images/canarias.jpg"},
    {name: "sara", id:3, source:"./images/canarias.jpg"},
    {name: "baldo", id:4, source:"./images/canarias.jpg"},
    {name: "playadito", id:5, source:"./images/canarias.jpg"},
  ]


  return(
    <div className="main">
      <div className="wrraper">
        <h2 className="title">Carrito de compras</h2>
        <Carrito />

        {things.map((thing)=>(
              <div key={thing.id} className="mainwrraper">
                  <img src={thing.source} alt="" className="image"/>
                  <div className="name-wrraper">
                    <h3 className="thing-name">
                      {thing.name}
                    </h3>
                  </div>
              </div>
        ))}
      </div>
    </div>
  )
}
export default App;