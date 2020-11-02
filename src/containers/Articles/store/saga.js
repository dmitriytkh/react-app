import { call, put, takeLatest, select } from "redux-saga/effects";

import * as constants from "./constants";
import * as actions from "./actions";
import * as selectors from "./selectors";

function* fetchAllArticles(callback) {
  try {
    /**
     * Request to DB
     */
    const data = [
      {
        id: 1,
        title: "Article title 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://picsum.photos/id/237/200/300",
      },
      {
        id: 2,
        title: "Article title 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://picsum.photos/id/237/200/300",
      },
      {
        id: 3,
        title: "Article title 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://picsum.photos/id/237/200/300",
      },
      {
        id: 4,
        title: "Article title 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://picsum.photos/id/237/200/300",
      },
    ];
    yield put(actions.A_FetchArticlesSuuccsess(data));
  } catch (err) {
    yield put(actions.A_FetchArticlesFailure(err));
  } finally {
    callback && typeof callback === "function" && callback(); //Why? in video single &
  }
}

function* fetchArticleById({ payload, callback }) {
  try {
    /**
     * Request to DB
     */
    const article = yield select(selectors.getArticle(payload));
    yield put(actions.A_FetchArticleSuuccsess(article));
  } catch (err) {
    yield put(actions.A_FetchArticleFailure(err));
  } finally {
    callback && typeof callback === "function" && callback();
  }
}

function* editArticle({ payload, callback }) {
  try {
    /**
     * Request to DB
     */
    yield put(actions.A_EditArticleSuuccsess(payload));
    yield put(actions.A_EditArticleClear());
  } catch (err) {
    yield put(actions.A_EditArticleFailure(err));
  } finally {
    callback && typeof callback === "function" && callback();
  }
}

function* removeArticleById({ payload, callback }) {
  try {
    /**
     * Request to DB
     */
    yield put(actions.A_RemoveArticleSuuccsess(payload));
  } catch (err) {
    yield put(actions.A_RemoveArticleFailure(err));
  } finally {
    callback && typeof callback === "function" && callback();
  }
}

function* AddArticle({ payload, callback }) {
  try {
    /**
     * Request to DB
     */
    yield put(actions.A_AddArticleSuuccsess(payload));
  } catch (err) {
    yield put(actions.A_AddArticleFailure(err));
  } finally {
    callback && typeof callback === "function" && callback();
  }
}

export default function* articlesWatcher() {
  yield takeLatest(constants.FETCH_ARTICLES_REQUEST, fetchAllArticles);
  yield takeLatest(constants.FETCH_ARTICLE_REQUEST, fetchArticleById); //Why?
  yield takeLatest(constants.EDIT_ARTICLE_REQUEST, editArticle); //Why?
  yield takeLatest(constants.REMOVE_ARTICLE_REQUEST, removeArticleById); //Why?
  yield takeLatest(constants.ADD_ARTICLE_REQUEST, AddArticle); //Why?
}
