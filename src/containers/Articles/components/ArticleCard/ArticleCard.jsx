import React from "react";
import "./index.scss";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { ROUTES_PATH } from "../../../../router/constants";
import * as actions from "../../store/actions";

const ArticleCard = ({ title, description, image, id }) => {
  const dispatch = useDispatch();

  const handleRemoveArticle = () => {
    dispatch(actions.A_RemoveArticleRequest(id));
  };

  return (
    <div className="article-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <button
          type="button"
          onClick={() => dispatch(push(`${ROUTES_PATH.ARTICLES}/${id}`))}
        >
          View
        </button>
        <button
          type="button"
          onClick={() => dispatch(push(`${ROUTES_PATH.ARTICLES}/${id}`))}
        >
          Edit
        </button>
        <button onClick={handleRemoveArticle} type="button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
