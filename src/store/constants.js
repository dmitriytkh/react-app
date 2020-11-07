import { actionConstantsCreator } from "../utils";

const ARTICLES = [
  "FETCH_ARTICLES",
  "FETCH_ARTICLE",
  "EDIT_ARTICLE",
  "REMOVE_ARTICLE",
  "ADD_ARTICLE",
];

const USERS = [
  "FETCH_USERS",
  // 'FETCH_USER',
  // 'EDIT_USER',
  // 'REMOVE_USER',
  // 'ADD_USER'
];

export const compose = [...ARTICLES, ...USERS];
export const constants = actionConstantsCreator(compose);
