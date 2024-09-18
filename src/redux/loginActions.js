// loginActions.js
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_BAD_REQUEST = 'LOGIN_BAD_REQUEST';
export const LOGIN_UNAUTHORIZED = 'LOGIN_UNAUTHORIZED';

export const loginRequest = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: { email, password },
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginBadRequest = (message) => ({
  type: LOGIN_BAD_REQUEST,
  payload: message,
});

export const loginUnauthorized = (message) => ({
  type: LOGIN_UNAUTHORIZED,
  payload: message,
});
