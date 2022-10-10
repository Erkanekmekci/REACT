import Card from "./components/card/card";
import data from "./data";

function card({language, btn, img}) {
  return (
    <div className="title">
<h1>{language}</h1>
<img src="{img}" alt="img" />
<Button btn ={btn}/>

    </div>
  )
}

export default card