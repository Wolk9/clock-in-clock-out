import { combineReducers } from 'redux';
import { CLOCK_IN, CLOCK_OUT } from '../actions/actionTypes';

const clockedInUsersReducer = (state = [], action) => {
  switch (action.type) {
    case CLOCK_IN:
      return [...state, { id: action.payload.id, name: action.payload.name, timestamp: action.payload.timestamp, elapsedTime: 0 }];
    case CLOCK_OUT:
      return state.filter(user => user.id !== action.payload.id);
    default:
      return state;
  }
};

const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case CLOCK_IN:
      return { id: action.payload.id, name: action.payload.name, timestamp: action.payload.timestamp };
    case CLOCK_OUT:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  clockedInUsers: clockedInUsersReducer,
  currentUser: currentUserReducer
});
