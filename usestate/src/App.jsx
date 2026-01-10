import "./App.css";
import { useState } from "react";
function App(){
   
  const [price, setPrice] = useState(10);
   // increment apply  here...
  const incrementHandle = () =>{
    const newPrice = price + 1;
    setPrice(newPrice);
  }

  // decrement apply here....
  const decrementHandle = () =>{
    const newprice = price -1;
    setPrice(newprice);
  }

  return(
    <div>
   

      <h1>this is app compo..</h1>
      <h1>price:  {price} </h1>


      <button onClick={incrementHandle}>click here increment btn</button>
      <button onClick={decrementHandle}>click here decrement btn</button>


    </div>
  )
}
export default App;