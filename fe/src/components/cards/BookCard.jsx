import React from "react";
import styles from "./bookCard.module.css";
import { convertDateIntoHuman } from "../../helpers/convertDate";
import { convertPrice } from "../../helpers/convertPrice";

export const BookCard = ({
  author,
  title,
  editor,
  cover,
  price,
  description,
  pubDate,
  isFeatured,
}) => {
  return (
    <div>
      <div className="card position-relative">
        <img src={cover} className="card-img-top" alt={title} />
        <div className="card-body">
          <div className={`badge bg-warning text-dark ${styles.isFeatured}`}>
            {isFeatured ? "Featured" : ""}
          </div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{author}</li>
          <li className="list-group-item">{editor}</li>
          <li className="list-group-item">{convertDateIntoHuman(pubDate)}</li>
          <li className="list-group-item">{convertPrice(price)}</li>
        </ul>
      </div>
    </div>
  );
};
