import * as constants from "./constants";

//Articles
export const A_FetchArticlesRequest = () => ({
  type: constants.FETCH_ARTICLES_REQUEST,
});
export const A_FetchArticlesSuuccsess = (articles) => ({
  type: constants.FETCH_ARTICLES_SUCCESS,
  payload: articles,
});
export const A_FetchArticlesFailure = (error) => ({
  type: constants.FETCH_ARTICLES_FAILURE,
  payload: error,
});
export const A_FetchArticlesClear = () => ({
  type: constants.FETCH_ARTICLES_CLEAR,
});

//Article
export const A_FetchArticleRequest = (id) => ({
  type: constants.FETCH_ARTICLE_REQUEST,
  payload: id,
});
export const A_FetchArticleSuuccsess = (article) => ({
  type: constants.FETCH_ARTICLE_SUCCESS,
  payload: article,
});
export const A_FetchArticleFailure = (error) => ({
  type: constants.FETCH_ARTICLE_FAILURE,
  payload: error,
});
export const A_FetchArticleClear = () => ({
  type: constants.FETCH_ARTICLE_CLEAR,
});

//Edit Article
export const A_EditArticleRequest = (article) => ({
  type: constants.EDIT_ARTICLE_REQUEST,
  payload: article,
});
export const A_EditArticleSuuccsess = (article) => ({
  type: constants.EDIT_ARTICLE_SUCCESS,
  payload: article,
});
export const A_EditArticleFailure = (error) => ({
  type: constants.EDIT_ARTICLE_FAILURE,
  payload: error,
});
export const A_EditArticleClear = () => ({
  type: constants.EDIT_ARTICLE_CLEAR,
});

//Remove Article
export const A_RemoveArticleRequest = (id) => ({
  type: constants.REMOVE_ARTICLE_REQUEST,
  payload: id,
});
export const A_RemoveArticleSuuccsess = (id) => ({
  type: constants.REMOVE_ARTICLE_SUCCESS,
  payload: id,
});
export const A_RemoveArticleFailure = (error) => ({
  type: constants.REMOVE_ARTICLE_FAILURE,
  payload: error,
});
export const A_RemoveArticleClear = () => ({
  type: constants.REMOVE_ARTICLE_CLEAR,
});

//Add Article
export const A_AddArticleRequest = (article) => ({
  type: constants.ADD_ARTICLE_REQUEST,
  payload: article,
});
export const A_AddArticleSuuccsess = (article) => ({
  type: constants.ADD_ARTICLE_SUCCESS,
  payload: article,
});
export const A_AddArticleFailure = (error) => ({
  type: constants.ADD_ARTICLE_FAILURE,
  payload: error,
});
export const A_AddArticleClear = () => ({
  type: constants.ADD_ARTICLE_CLEAR,
});
