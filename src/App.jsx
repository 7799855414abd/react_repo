import React,{useState,useEffect} from "react";
import "./index.css";

const App = () =>{
  const [count,setCount] = useState(0);
 

   useEffect(()=> {
      console.log("Hello iam from useEffect",count)   
   },[count])
  
  return(
         <div style = {{"textAlign":"center"}}>
             
             <h1>Learn Use Effect</h1>
             <h3  >{count}</h3>
             <button onClick = {()=>{setCount(count+1)}}>XXX</button>
         </div>
  )
  
}



export default App;