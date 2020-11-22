import { call, put, takeLatest, select } from "redux-saga/effects";
import { actions } from "../../../store/actions";
import { constants } from "../../../store/constants";
import * as selectors from "./selectors";
import { sagaAssessor } from "../../../utils";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4001/api",
});

function* fetchAllArticles(callback) {
  try {
    /**
     * Request to DB
     */
    const URL = "/articles";
    const { data } = yield call(() => api.get(URL));
    // const data = [
    //   {
    //     id: 1,
    //     title: "Article title 1",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     image: "https://picsum.photos/id/237/200/300",
    //   },
    //   {
    //     id: 2,
    //     title: "Article title 2",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     image: "https://picsum.photos/id/237/200/300",
    //   },
    //   {
    //     id: 3,
    //     title: "Article title 3",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     image: "https://picsum.photos/id/237/200/300",
    //   },
    //   {
    //     id: 4,
    //     title: "Article title 4",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     image: "https://picsum.photos/id/237/200/300",
    //   },
    // ];
    yield put(actions.FETCH_ARTICLES.SUCCESS(data));
  } catch (err) {
    yield put(actions.FETCH_ARTICLES.FAILURE(err));
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
    yield put(actions.FETCH_ARTICLE.SUCCESS(article));
  } catch (err) {
    yield put(actions.FETCH_ARTICLE.FAILURE(err));
  } finally {
    callback && typeof callback === "function" && callback();
  }
}

function* editArticle({ payload, callback }) {
  try {
    /**
     * Request to DB
     */
    const { id, ...rest } = payload;
    const URL = `/articles/${id}`;
    const { data } = yield call(() => axios.put(URL, rest));
    yield put(actions.EDIT_ARTICLE.SUCCESS(data));
    yield put(actions.EDIT_ARTICLE.CLEAR());
  } catch (err) {
    yield put(actions.EDIT_ARTICLE.FAILURE(err));
  } finally {
    callback && typeof callback === "function" && callback();
  }
}

function* removeArticleById({ payload, callback }) {
  try {
    /**
     * Request to DB
     */
    const URL = `/articles/${payload}`;
    const { data } = yield call(() => axios.delete(URL));
    yield put(actions.REMOVE_ARTICLE.SUCCESS(data.id));
  } catch (err) {
    yield put(actions.REMOVE_ARTICLE.FAILURE(err));
  } finally {
    callback && typeof callback === "function" && callback();
  }
}

// function* AddArticle({ payload, callback }) {
//   try {
//     /**
//      * Request to DB
//      */
//     yield put(actions.ADD_ARTICLE.SUCCESS(payload));
//   } catch (err) {
//     yield put(actions.ADD_ARTICLE.FAILURE(err));
//   } finally {
//     callback && typeof callback === "function" && callback();
//   }
// }

const AddArticle = ({ payload, callback }) =>
  sagaAssessor(
    () =>
      function* () {
        const URL = "/articles";
        const { data } = yield call(() => axios.post(URL, payload));
        yield put(actions.ADD_ARTICLE.SUCCESS(data));
      },
    actions.ADD_ARTICLE.FAILURE,
    callback
  );

export default function* articlesWatcher() {
  yield takeLatest(constants.FETCH_ARTICLES.REQUEST, fetchAllArticles);
  yield takeLatest(constants.FETCH_ARTICLE.REQUEST, fetchArticleById); //Why?
  yield takeLatest(constants.EDIT_ARTICLE.REQUEST, editArticle); //Why?
  yield takeLatest(constants.REMOVE_ARTICLE.REQUEST, removeArticleById); //Why?
  yield takeLatest(constants.ADD_ARTICLE.REQUEST, AddArticle); //Why?
}
