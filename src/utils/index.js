import { call, put } from "redux-saga/effects";

const types = ["REQUEST", "SUCCESS", "FAILURE", "CLEAR"];

export const actionConstantsCreator = (constArr) => {
  const result = {};

  constArr.forEach((constItem) => {
    result[constItem] = {};

    types.forEach((type) => {
      result[constItem][type] = `${constItem}_${type}`;
    });
  });
  return result;
};

export const actionCreator = (constArr) => {
  const result = {};

  constArr.forEach((constItem) => {
    result[constItem] = {};

    types.forEach((type) => {
      result[constItem][type] = (payload = {}, callback, options) => ({
        type: `${constItem}_${type}`,
        payload,
        callback,
        options,
      });
    });
  });
  return result;
};

export function* sagaAssessor(request, failure, callback) {
  try {
    yield call(request());
  } catch (err) {
    yield put(failure(err));
  } finally {
    callback && typeof callback === "function" && callback();
  }
}

export const createReducer = (initialState, handlers) => (
  state = initialState,
  action
) =>
  handlers.hasOwnProperty(action.type)
    ? handlers[action.type](state, action)
    : state;
