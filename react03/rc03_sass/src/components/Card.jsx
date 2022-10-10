import CardStyle from "../scss/card.module.scss";

const Card = ({data}) => {
 return <div className={CardStyle.container}>
  {data.map((item) =>{
    return(
      <div>
        <h1>{name}</h1>
      </div>
    )
  })

  
  }

  </div>
};

export default Card;
