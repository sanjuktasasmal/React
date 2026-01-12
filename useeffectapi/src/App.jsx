import { useEffect, useState } from 'react';
import './App.css'
import Singledata from './components/Singledata';

function App() {

  const [allData, setAllData] = useState([]);

  useEffect( ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setAllData(data))
  }, [])
 
  return (
    <>
     
    <h1>data : {allData.length}</h1>
     {
      allData.map(singleData => <Singledata

          key={singleData.id}
         singleData ={singleData}
     
     ></Singledata>)
     }
    </>
  )
}

export default App
