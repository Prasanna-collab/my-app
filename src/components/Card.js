import "./Card.css";

function Card(props) {
     
     console.log(props.className);
  return <div className="card expenses">{props.children}</div>;
}

export default Card;
