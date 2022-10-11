// import Card from "./components/card/card";
// import data from "./data";
import "./Card.css";

// const Card = (props) => {
//   console.log(props);
// const {language,btn,img}= props; ==>birinci yol
const Card = ({ language, btn, img }) => {
  return (
    <div>
      <h1>{language}</h1>
      <img src={img} alt="img" />
      <Buton btn={btn} />
    </div>
  )
}

export default Card