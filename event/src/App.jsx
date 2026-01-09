
import './App.css'

function App() {
  //   <button onClick={()=>alert("clicked!")}>click me</button> - 1. short process 

  // 2. another process
     function handleClick(){
      alert("hello this is btn click!");
     }
  

  return (
    <>
    <button style={{backgroundColor: "aquamarine"}} onClick={handleClick}>click here</button>
    </>
  )
}

export default App
