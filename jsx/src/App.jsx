
import './App.css'

function App() {

  // i am appling jsx..
  const styles = {border:'2px solid #b54f4fff ', backgroundColor:'red'};
  const name = "Sanjukta";

  

  return (
    <>
     <h1>2+2={2+2}</h1>
     <h1>Hello</h1>

     <h3 style={{color: 'red', border:'2px solid green'}}>submit</h3>
       

     <div style={styles}>
      <h2>welcome, {name} !</h2>

    </div>
    </>
  )
}

export default App
