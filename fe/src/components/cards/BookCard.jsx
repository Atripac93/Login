import Card from "react-bootstrap/Card";
import styles from "./bookCard.module.css";

const BookCard = ({ title, category, img }) => {
  return (
    <Card className={styles.myCard} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default BookCard;
//La struttura delle cards
