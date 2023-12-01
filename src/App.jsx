import React from "react";
import "./index.css";


const App = () =>{
  function clickHandle(e, firstName){
    console.log("hello rio",firstName,e)
  }
  
  return(
    <main className="container">
      <button 
      className="button"
      onClick={(e)=> clickHandle(e,"meeru")}
      >click</button>
    </main>
  )
}





export default App;