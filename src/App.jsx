import React,{useState,useEffect} from "react";
import "./index.css";


const url = "https://jsonplaceholder.typicode.com/posts/";
const App = () =>{
  const [drinksdata, setDrinksdata] = useState([]);
  const [searchTerm,setSearchterm] = useState(1);
  
  
  const fetchData = async(apiUrl) => {
    const response = await fetch(apiUrl);
    const data = await response.json()
    setDrinksdata(data)
  }

  useEffect(()=> {
    const correctUrl = `${url}${searchTerm}`
    fetchData(correctUrl)
    
    
  },[searchTerm])


  
  return(
         <div style = {{"textAlign":"center"}}>
             <form>
               <input type = "text"
                      name = "search"
                      id = "search"
                      placeholder="search something new ..."
                      onChange={(e) => setSearchterm(e.target.value)}
               />
             </form>

             <hr/>
             <ul className="unorder-list-cont">
              {
                drinksdata.map((eachDrink) => {
                  const {id, title, body } = eachDrink;
                  return (
                    <li key = {id} className="listelement">
                      <h1>{title}</h1>
                      <p>{body}</p>
                    </li>
                  )
         })
              }
             </ul>
             
         </div>
  )
  
}



export default App;