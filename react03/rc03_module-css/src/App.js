import Card from "./components/card/card"
import data from "./data";


function App() {
  return (
    <>
    {data.map((item) =>{
      const {id, language,img,btnName} = item
      return( <Card language={language} img ={img} btn ={btnName}/>

        
      )
    })}
     
    </>
  )
}

export default App;
