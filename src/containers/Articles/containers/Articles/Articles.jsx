import React from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { ArticleCard } from "../../components/ArticleCard";
import { getAllArticles } from "../../store/selectors";
import * as actions from "../../store/actions";
import { v4 as uuidv4 } from "uuid";

const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(getAllArticles());

  const handleAddArticle = () => {
    const article = {
      id: uuidv4(),
      title: `Article title ${uuidv4()}`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://picsum.photos/id/237/200/300",
    };
    dispatch(actions.A_AddArticleRequest(article));
  };

  return (
    <div className="articles-wrapper">
      <button className="add-article" onClick={handleAddArticle}>
        Add new article
      </button>
      <div className="articles">
        {articles.map((article) => {
          return <ArticleCard key={article.id} {...article} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
