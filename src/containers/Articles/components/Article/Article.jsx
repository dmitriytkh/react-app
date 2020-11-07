import React, { useEffect, useState } from "react";
import "./index.scss";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { getArticle } from "../../store/selectors";
import { withRouter } from "react-router";
import { actions } from "../../../../store/actions";
import { ROUTES_PATH } from "../../../../router/constants";

const Article = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    dispatch(actions.FETCH_ARTICLE.REQUEST(id));
  }, [dispatch]);

  const selectedArticle = useSelector(getArticle(id));

  useEffect(() => {
    setArticle(selectedArticle);
  }, [selectedArticle]);

  const handleChangeArticle = () => {
    dispatch(actions.EDIT_ARTICLE.REQUEST(article));
    dispatch(push(ROUTES_PATH.ARTICLES));
  };

  const handleRemoveArticle = () => {
    dispatch(actions.REMOVE_ARTICLE.REQUEST(article.id));
    dispatch(push(ROUTES_PATH.ARTICLES));
  };

  return article ? (
    <div className="article">
      <img src={article.image} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <div>
        <button onClick={handleChangeArticle} type="button">
          Save changes
        </button>
        <button onClick={handleRemoveArticle} type="button">
          Remove
        </button>
      </div>
    </div>
  ) : null;
};

export default withRouter(Article);
