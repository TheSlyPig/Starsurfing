import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = (user) => dispatch => (
  SessionApiUtil.login(user).then(
    user => (dispatch(receiveCurrentUser(user))),
    error => (dispatch(receiveSessionErrors(errors.responseJSON)))
  )
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(
    user => (dispatch(receiveCurrentUser(null)))
  )
);

export const signup = (user) => dispatch => (
  SessionApiUtil.signup(user).then(
    user => (dispatch(receiveCurrentUser(user))),
    errors => (dispatch(receiveSessionErrors(errors.responseJSON)))
  )
);

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};