import "./App.css";
import { useEffect, useState } from "react";
function App(){

 const[count, setCount]  = useState(0);


   // alerting for frist time 
   useEffect(() => {
       alert("heloo...");
      }, [])  

      // alerting for change any value
   useEffect( () => {
     alert("alert for any change value")
   },[count])


   // change value function..
    const updateCount = ( )=>{
      const newValue = count +1;
      setCount(newValue);
    }

  return(
    <div>
     
     <h1>App compo..</h1>
     <p>Price:  {count}</p>
     <button onClick={updateCount}>click here</button>

    </div>
  )
}

export default App;



