import "./App.css";
import Object from "./component/Object";

function App (){

  const products = {
    name: 'Nokia',
    price: 1100

  }
  return(
    <div>
       <Object products={products}/>
    </div>
  )
}
export default App;