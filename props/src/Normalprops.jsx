
function Normalprops(props){
    //it's for style
     const color={ border:"2px solid red",
         backgroundColor:"pink", 
         color:"white" ,
         margin:"6px",
        padding:"3px"}

   
   return(
     
     <div style={color}>
         <h3>normalprops compo</h3>
          <h1>Name: {props.name}</h1> 
          <h2>Age:{props.age}</h2>  
          
        
     </div>
   )
}
export default Normalprops;