import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import reviewErrorsReducer from './review_errors_reducer';
import requestErrorsReducer from './request_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  review: reviewErrorsReducer,
  request: requestErrorsReducer,
});

export default errorsReducer;
