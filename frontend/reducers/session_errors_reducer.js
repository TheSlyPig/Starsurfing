import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const SessionErrorsReducer = function(state = [], action){
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return state.concat(action.errors);
    default:
      return state;
  }
};

export default SessionErrorsReducer;