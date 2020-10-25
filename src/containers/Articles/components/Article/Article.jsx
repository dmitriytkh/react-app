import React from "react";
import "./index.scss";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { ROUTES_PATH } from "../../../../router/constants";

const Article = ({ article: { title, description, image, index } }) => {
  const dispatch = useDispatch();

  return (
    <div className="article">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <button
          type="button"
          onClick={() => dispatch(push(`${ROUTES_PATH.ARTICLES}/${index}`))}
        >
          View
        </button>
        <button type="button">Edit</button>
        <button type="button">Remove</button>
      </div>
    </div>
  );
};

export default Article;
