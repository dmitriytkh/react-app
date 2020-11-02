import * as constants from "./constants";

const initialState = {
  error: null,
  articles: [],
  selectedArticle: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_ARTICLES_REQUEST:
    case constants.FETCH_ARTICLE_REQUEST:
    case constants.EDIT_ARTICLE_REQUEST:
    case constants.REMOVE_ARTICLE_REQUEST:
    case constants.ADD_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload,
        error: null,
      };
    case constants.FETCH_ARTICLES_FAILURE:
    case constants.FETCH_ARTICLE_FAILURE:
    case constants.EDIT_ARTICLE_FAILURE:
    case constants.REMOVE_ARTICLE_FAILURE:
    case constants.ADD_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case constants.FETCH_ARTICLES_CLEAR:
      return { ...state, articles: [] };
    case constants.FETCH_ARTICLE_CLEAR:
    case constants.EDIT_ARTICLE_CLEAR:
      return { ...state, selectedArticle: null };
    case constants.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        selectedArticle: action.payload,
        loading: false,
        error: null,
      };
    case constants.EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        articles: [...state.articles].map((article) => {
          if (article.id === action.payload.id) {
            return action.payload;
          }
          return article;
        }),
      };
    case constants.REMOVE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        articles: [...state.articles].filter(
          (article) => article.id !== action.payload
        ),
      };
    case constants.ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        articles: [...state.articles].concat(action.payload),
      };
    default:
      return { ...state };
  }
};

export default reducer;
