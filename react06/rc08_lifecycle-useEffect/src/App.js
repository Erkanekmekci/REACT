import LifeCycleMethods from "./components/LifeCycleMethods";
import {useState} from "react";

function App() {
  const[show,setShow]=useState(true) 
  return (
    <div className="container text-center mt-4">
      <button className="btn btn-dark" onClick={()=>setShow(!show)}></button>
      <LifeCycleMethods />
    </div>
  );
}

export default App;
